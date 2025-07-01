import { Hono } from "hono/dist/types/hono";
import { Context } from "hono/dist/types/context";
import type { Bindings } from '../main';
import prismaClients from '../lib/prismaClient'
import { response } from "./utils/response";

export default (app: Hono<{ Bindings: Bindings }>, path: string) => {
    // 创建域名
    app.post(`${path}/create`, async (c: Context) => {
        try {
            // 1. 使用您项目中的方式获取 Prisma Client 实例
            const prisma = await prismaClients.fetch(c.env.DB);

            // 2. 解析请求体
            const { name } = await c.req.json();

            // 3. 输入验证
            if (!name || typeof name !== 'string' || name.trim() === '') {
                return response(c, null, 'Domain name is required.', 400);
            }
            
            // 简单的域名格式校验 (推荐保留)
            const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!domainRegex.test(name)) {
                return response(c, null, 'Invalid domain name format.', 400);
            }

            // 4. 检查域名是否已存在
            const existingDomain = await prisma.domain.findFirst({
                where: { name: name },
            });

            if (existingDomain) {
                return response(c, null, `Domain '${name}' already exists.`, 409); // 409 Conflict
            }

            // 5. 创建新域名
            const newDomain = await prisma.domain.create({
                data: {
                    name: name,
                },
            });

            // 6. 使用您的 response 辅助函数返回成功响应
            return response(c, newDomain, 'Domain created successfully.', 200); // 201 Created

        } catch (error) {
            // 7. 使用您的 response 辅助函数处理统一错误
            console.error('Error creating domain:', error);
            return response(c, null, 'An error occurred while creating the domain.', 500);
        }
    });

    app.get(`${path}/list`, async (c: Context) => {
        try {
            // 1. 获取 Prisma Client 实例
            const prisma = await prismaClients.fetch(c.env.DB);

            // 2. 查询所有域名
            // 使用 findMany() 获取 Domain 表中的所有记录
            // 添加 orderBy 使结果按创建时间降序排列 (最新的在前)，这是一个好习惯
            const allDomains = await prisma.domain.findMany({
                orderBy: {
                    createdAt: 'desc',
                },
            });

            // 3. 使用您的 response 辅助函数返回成功响应
            // 如果查询成功但没有数据，allDomains 将是一个空数组 []，这也是一种有效的成功状态
            return response(c, allDomains, 'Domains fetched successfully.');

        } catch (error) {
            // 4. 统一处理可能发生的错误
            console.error('Error fetching domains:', error);
            return response(c, null, 'An error occurred while fetching domains.', 500);
        }
    });
};
