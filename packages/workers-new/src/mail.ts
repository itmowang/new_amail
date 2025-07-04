import { Hono } from "hono/dist/types/hono";
import { Context } from "hono/dist/types/context";
import prismaClients from '../lib/prismaClient';
import type { Bindings } from '../main';
import { verify } from "hono/jwt"; // 确保你已经从 hono 中引入了 verify

// 假设 JWT_SECRET 在别处定义或从环境变量获取
export const JWT_SECRET = 'your-super-secret-key';

export default (app: Hono<{ Bindings: Bindings }>, path: string) => {

/**
     * @description 分页查询指定邮箱地址下的所有邮件 (无表关联实现)
     * @method GET
     * @path /api/v1/email/all_mail
     * @query userEmailDomainId - 用户邮箱ID (必需)
     * @query page - 页码 (可选, 默认 1)
     * @query pageSize - 每页数量 (可选, 默认 10)
     */
app.get(`${path}/all_mail`, async (c: Context) => {
  try {
      // --- 步骤 1: 鉴权 (保持不变) ---
      const authHeader = c.req.header('Authorization');
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
          return c.json({ code: 401, msg: '未提供有效的认证令牌' }, 401);
      }
      const token = authHeader.substring(7);
      const decodedPayload = await verify(token, JWT_SECRET);
      const userId = decodedPayload.id as string;
      if (!userId) {
          return c.json({ code: 401, msg: '令牌无效或已过期' }, 401);
      }

      // --- 步骤 2: 解析查询参数 (保持不变) ---
      const { page, pageSize, userEmailDomainId } = c.req.query();
      if (!userEmailDomainId) {
          return c.json({ code: 400, msg: '缺少必需的参数: userEmailDomainId' }, 400);
      }
      const pageNum = parseInt(page || '1', 10);
      const pageSizeNum = parseInt(pageSize || '10', 10);

      const prisma = await prismaClients.fetch(c.env.DB);

      // --- 步骤 3: 验证所有权并获取 emailName 和 domainId ---
      const ownedEmailAddress = await prisma.userEmailDomain.findFirst({
          where: {
              id: userEmailDomainId,
              userId: userId,
          }
      });
      if (!ownedEmailAddress) {
          return c.json({ code: 404, msg: '指定的邮箱地址不存在或您无权访问' }, 404);
      }

      // --- 步骤 4: 查询域名信息以拼接完整邮箱 ---
      const domainInfo = await prisma.domain.findUnique({
          where: {
              id: ownedEmailAddress.domainId,
          }
      });
      if (!domainInfo) {
          return c.json({ code: 404, msg: '关联的域名信息不存在' }, 404);
      }
      
      // 手动拼接出完整的邮箱地址字符串
      const fullEmailAddress = `${ownedEmailAddress.emailName}@${domainInfo.name}`;


      // --- 步骤 5: 使用拼接的邮箱地址查询 Email 表 ---
      const whereClause = {
          recipientEmail: fullEmailAddress, // 查询条件变为 recipientEmail 字段
      };

      const [emails, total] = await prisma.$transaction([
          prisma.email.findMany({
              where: whereClause,
              orderBy: {
                  createdAt: 'desc',
              },
              skip: (pageNum - 1) * pageSizeNum,
              take: pageSizeNum,
          }),
          prisma.email.count({
              where: whereClause,
          }),
      ]);

      // --- 步骤 6: 成功响应 ---
      return c.json({
          code: 200,
          msg: '邮件列表查询成功',
          data: {
              list: emails,
              total: total,
              page: pageNum,
              pageSize: pageSizeNum,
          }
      });

  } catch (error: any) {
      // --- 步骤 7: 统一错误处理 ---
      console.error('查询邮件列表时发生错误:', error);
      if (error.name === 'JwtTokenInvalid' || error.name === 'JwtTokenExpired') {
          return c.json({ code: 401, msg: '认证失败：令牌无效或已过期' }, 401);
      }
      return c.json({ code: 500, msg: '服务器内部错误，请稍后重试' }, 500);
  }
});
};