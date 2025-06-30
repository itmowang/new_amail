import { Hono } from "hono/dist/types/hono";
import { Context } from "hono/dist/types/context";
import prismaClients from '../lib/prismaClient'
import type { Bindings } from '../main';

export default (app: Hono<{ Bindings: Bindings }>, path: string) => {
  // 刷新当前邮箱列表
  app.get(`${path}/refetch`, async (c: Context) => {
    const { name } = c.req.query();
    const inboxJSONString = (await c.env.amailkv.get(name)) || "[]";
    const inboxJSON = JSON.parse(inboxJSONString);
    inboxJSON.reverse();
    return new Response(JSON.stringify(inboxJSON), { headers: { "content-type": "application/json" } });
  });

  // 获取所有邮件
  app.get(`${path}/all_mail`, async (c: Context) => {
    // 获取所有邮件（分页） 
    const prisma = await prismaClients.fetch(c.env.DB)
    const query = c.req.query();
    const page = parseInt(query.page || "1", 10);
    const pageSize = parseInt(query.pageSize || "10", 10);
    const skip = (page - 1) * pageSize;

    try {
      const [emails, total] = await Promise.all([
        prisma.email.findMany({
          orderBy: { createdAt: "desc" },
          skip,
          take: pageSize,
        }),
        prisma.email.count(),
      ]);

      return c.json({
        data: emails,
        pagination: {
          page,
          pageSize,
          total,
          totalPages: Math.ceil(total / pageSize),
        },
      });
    } catch (err) {
      console.error("Failed to fetch emails:", err);
      return c.json({ error: `Failed to fetch emails${JSON.stringify(c)}` }, 500,);
    }
  });
};
