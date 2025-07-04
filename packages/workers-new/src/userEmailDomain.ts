import { Hono } from "hono/dist/types/hono";
import { Context } from "hono/dist/types/context";
import prismaClients from '../lib/prismaClient'
import type { Bindings } from '../main';
import { verify } from "hono/jwt";

export const JWT_SECRET = 'your-super-secret-key';

export default (app: Hono<{ Bindings: Bindings }>, path: string) => {
    // 当前用户创建邮箱账号
    app.post(`${path}/create`, async (c: Context) => {
        try {
            // --- 步骤 1: 鉴权 ---
            const authHeader = c.req.header('Authorization');
            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                // 如果请求头中没有 Authorization 或格式不正确
                return c.json({ code: 401, msg: '未提供有效的认证令牌' }, 401);
            }
            const token = authHeader.substring(7); // 提取 "Bearer " 后面的Token字符串
            // --- 步骤 2: 验证并解析JWT ---
            const decodedPayload = await verify(token, JWT_SECRET)

            const userId = decodedPayload.id;
            if (!userId) {
                // 如果载荷中没有 userId
                return c.json({ code: 401, msg: '令牌无效或已过期' }, 401);
            }

            // --- 步骤 3: 解析请求体与参数校验 ---
            const { domainId, emailName } = await c.req.json<{ domainId: string, emailName: string }>();

            if (!domainId || !emailName) {
                return c.json({ code: 400, msg: '请求参数不完整，domainId 和 emailName 是必填项' }, 400);
            }

            // 校验邮箱名称格式，例如：只允许字母、数字、下划线、点和连字符
            const emailNameRegex = /^[a-zA-Z0-9_.-]+$/;
            if (!emailNameRegex.test(emailName)) {
                return c.json({ code: 400, msg: '邮箱名称包含无效字符' }, 400);
            }

            // --- 步骤 4: 数据库操作 ---
            const prisma = await prismaClients.fetch(c.env.DB);

            // 4.1 检查域名是否存在
            const domain = await prisma.domain.findUnique({
                where: { id: domainId }
            });
            if (!domain) {
                return c.json({ code: 404, msg: '所选的域名不存在' }, 404);
            }

            // 4.2 检查邮箱地址是否已被占用 (同一个域名下，邮箱名称不能重复)
            const existingEmail = await prisma.userEmailDomain.findFirst({
                where: {
                    emailName: {
                        equals: emailName,
                        // mode: 'insensitive' // 如果需要不区分大小写，可以开启此选项 (SQLite支持)
                    },
                    domainId: domainId,
                }
            });

            if (existingEmail) {
                return c.json({ code: 409, msg: `邮箱地址 ${emailName}@${domain.name} 已被占用` }, 409);
            }

            // 4.3 创建新的用户邮箱记录
            const newUserEmail = await prisma.userEmailDomain.create({
                data: {
                    userId: userId as string,
                    domainId: domainId,
                    emailName: emailName,
                }
            });

            // --- 步骤 5: 成功响应 ---
            return c.json({
                code: 201, // 201 Created 表示资源创建成功
                msg: '邮箱账户创建成功',
                data: {
                    id: newUserEmail.id,
                    fullEmail: `${newUserEmail.emailName}@${domain.name}`,
                    createdAt: newUserEmail.createdAt,
                }
            }, 201);

        } catch (error: any) {
            // --- 步骤 6: 统一错误处理 ---
            console.error('创建邮箱时发生错误:', error);

            // 特别处理JWT相关的错误
            if (error.name === 'JwtTokenInvalid' || error.name === 'JwtTokenExpired') {
                return c.json({ code: 401, msg: '认证失败：令牌无效或已过期' }, 401);
            }

            // 其他所有未预料到的错误
            return c.json({ code: 500, msg: '服务器内部错误，请稍后重试' }, 500);
        }
    });

    /**
   * @description 查询当前认证用户的邮箱列表 (包含域名信息)
   * @method GET
   * @path /api/v1/email/list
   */
    app.get(`${path}/list`, async (c: Context) => {
        try {
            // --- 步骤 1: 鉴权 (逻辑不变) ---
            const authHeader = c.req.header('Authorization');
            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                return c.json({ code: 401, msg: '未提供有效的认证令牌' }, 401);
            }
            const token = authHeader.substring(7);

            // --- 步骤 2: 验证并解析JWT (逻辑不变) ---
            const decodedPayload = await verify(token, JWT_SECRET);
            const userId = decodedPayload.id;
            if (!userId) {
                return c.json({ code: 401, msg: '令牌无效或已过期' }, 401);
            }

            // --- 步骤 3: 数据库查询 (分为两步) ---
            const prisma = await prismaClients.fetch(c.env.DB);

            // 步骤 3.1: 查询该用户的所有邮箱记录 (你的原始查询)
            const userEmails = await prisma.userEmailDomain.findMany({
                where: {
                    userId: userId,
                },
                orderBy: {
                    createdAt: 'desc',
                }
            });

            // 如果用户没有任何邮箱，直接返回空列表
            if (userEmails.length === 0) {
                return c.json({
                    code: 200,
                    msg: '邮箱列表查询成功',
                    data: []
                });
            }

            // 步骤 3.2: 提取所有 domainId，并查询对应的域名信息
            // 使用 Set 来自动去重，提高查询效率
            const domainIds = [...new Set(userEmails.map(email => email.domainId))];

            const domains = await prisma.domain.findMany({
                where: {
                    id: {
                        in: domainIds, // 使用 in 查询一次性获取所有相关的域名
                    }
                }
            });

            // 创建一个 Domain ID -> Domain Name 的映射，方便快速查找
            const domainMap = new Map(domains.map(domain => [domain.id, domain.name]));

            // 遍历邮箱记录，将域名信息添加进去
            const formattedData = userEmails.map(email => {
                const domainName = domainMap.get(email.domainId) || null; // 安全地获取域名
                return {
                    ...email, // 保留 UserEmailDomain 的所有原始字段
                    domainName: domainName, // 新增域名名称字段
                    fullEmail: `${email.emailName}@${domainName}` // 额外提供一个拼接好的完整邮箱地址
                };
            });

            // --- 步骤 5: 成功响应 (逻辑不变) ---
            return c.json({
                code: 200,
                msg: '邮箱列表查询成功',
                data: formattedData
            });

        } catch (error: any) {
            // --- 步骤 6: 统一错误处理 (逻辑不变) ---
            console.error('查询邮箱列表时发生错误:', error);
            if (error.name === 'JwtTokenInvalid' || error.name === 'JwtTokenExpired') {
                return c.json({ code: 401, msg: '认证失败：令牌无效或已过期' }, 401);
            }
            return c.json({ code: 500, msg: '服务器内部错误，请稍后重试' }, 500);
        }
    });

  /**
     * @description 删除当前用户拥有的一个邮箱账号
     * @method POST
     * @path /api/v1/email/delete
     * @body { "id": "email_record_id_to_delete" }
     */
  app.post(`${path}/delete`, async (c: Context) => { // 1. 方法改为 app.post，路径不含:id
    try {
        // --- 步骤 1 & 2: 鉴权和JWT验证 (逻辑不变) ---
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

        // --- 步骤 3: 从 JSON 请求体中获取 ID ---
        const { id: emailIdToDelete } = await c.req.json<{ id: string }>();
        if (!emailIdToDelete) {
            return c.json({ code: 400, msg: '请求体中缺少邮箱ID (id)' }, 400);
        }

        // --- 步骤 4: 数据库操作与权限验证 (核心逻辑不变) ---
        const prisma = await prismaClients.fetch(c.env.DB);

        // 关键步骤：在删除前，先确认这条记录存在且属于当前用户
        const emailRecord = await prisma.userEmailDomain.findUnique({
            where: {
                id: emailIdToDelete,
            }
        });

        // 检查1: 记录是否存在
        if (!emailRecord) {
            return c.json({ code: 404, msg: '要删除的邮箱账号不存在' }, 404);
        }

        // 检查2: 记录是否属于当前用户 (安全核心)
        if (emailRecord.userId !== userId) {
            return c.json({ code: 403, msg: '无权删除此邮箱账号' }, 403);
        }

        // 执行删除操作
        await prisma.userEmailDomain.delete({
            where: {
                id: emailIdToDelete,
            }
        });

        // --- 步骤 5: 成功响应 (逻辑不变) ---
        return c.json({ code: 200, msg: '邮箱账号删除成功' });

    } catch (error: any) {
        // --- 步骤 6: 统一错误处理 (逻辑不变) ---
        console.error('删除邮箱时发生错误:', error);
        if (error.name === 'JwtTokenInvalid' || error.name === 'JwtTokenExpired') {
            return c.json({ code: 401, msg: '认证失败：令牌无效或已过期' }, 401);
        }
        if (error instanceof SyntaxError) {
            return c.json({ code: 400, msg: '无效的JSON请求体' }, 400);
        }
        if (error.code === 'P2025') {
             return c.json({ code: 404, msg: '要删除的资源不存在' }, 404);
        }
        return c.json({ code: 500, msg: '服务器内部错误，请稍后重试' }, 500);
    }
});
};
