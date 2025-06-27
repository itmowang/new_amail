import { Hono } from "hono/dist/types/hono";
import { Context } from "hono/dist/types/context";
import { jwt, sign, verify } from 'hono/jwt';
import bcrypt from 'bcryptjs'; 
import { response } from "./utils/response";
import prismaClients from '../lib/prismaClient'
import type { Bindings } from '../main';

export const JWT_SECRET = 'your-super-secret-key';

export default (app: Hono<{ Bindings: Bindings }>, path: string) => {
    // 注册
    app.post(`${path}/register`, async (c: Context) => {
        try {
            const prisma = await prismaClients.fetch(c.env.DB)
            const { email, password, name } = await c.req.json();
            // 检查用户是否已存在
            const existingUser = await prisma.user.findUnique({ where: { email } });
            if (existingUser) {
                return response(c, null, 'Email already registered.', 400);
            }
            // 密码加密
            const hashedPassword = await bcrypt.hash(password, 10);

            // 创建用户
            const user = await prisma.user.create({
                data: {
                    email,
                    name,
                    password: hashedPassword,
                },
            });
            return response(c, { id: user.id, email: user.email, name: user.password }, 'User registered successfully.');
        } catch (error) {
            return response(c, null, 'An error occurred during registration.', 500);
        }

    });

    // 登录
    app.post(`${path}/login`, async (c: Context) => {
        try {
            const prisma = await prismaClients.fetch(c.env.DB)
            const { email, password } = await c.req.json();
            // 查找用户
            const user = await prisma.user.findUnique({ where: { email } });

            if (!user) {
                return response(c, null, 'User not found.', 404);
            }

            // 验证密码
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return response(c, null, 'Invalid password.', 401);
            }

            // 生成 JWT
            const token = await sign({ id: user.id, email: user.email, name: user.name }, JWT_SECRET);

            return response(c, { token, user: { id: user.id, email: user.email, name: user.name } }, 'Login successful.');
        } catch (error) {
            return response(c, null, 'An error occurred during login.', 500);
        }

    });
};
