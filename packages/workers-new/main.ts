import PostalMime, { RawEmail } from "postal-mime";
import { Hono } from "hono";
import { cors } from "hono/cors";
import mail from "./src/mail";
import user from './src/user';
import test from './src/test';
import { HTTPException } from "hono/http-exception";
import prismaClients from './lib/prismaClient'
import { response } from "./src/utils/response";

export type Bindings = {
  MY_KV: KVNamespace
  DB: D1Database
}
const app = new Hono<{ Bindings: Bindings }>().basePath("/api");

app.use("*", cors());
app.get("/", (c) => c.text("GET /"));
app.post("/", (c) => c.text("POST /"));
app.put("/", (c) => c.text("PUT /"));
app.delete("/", (c) => c.text("DELETE /"));

//  routes
mail(app, "/mail");
user(app, "/user");
test(app, "/test");

app.notFound((c) => {
  return c.text("Custom 404 Message", 404);
});

app.onError((err, c) => {
  console.error('全局错误:', err);

  // 如果是 Hono 自带的 HTTPException，它会包含 status
  if (err instanceof HTTPException) {
    return err.getResponse();
  }

  // 对于其他未知错误，返回一个标准的 500 错误
  return c.json(
    {
      message: '服务器内部错误',
      error: {
        name: err.name,
        message: err.message,
        // 在开发环境中可以包含 stack，生产环境建议关闭
        // stack: err.stack, 
      },
    },
    500
  );
});

export default {
  ...app,
  async email(message: any, env: any, ctx: any) {
    const parser = new PostalMime();
    const email = await parser.parse(message.raw);
    console.log(message);
    
    console.log(env,ctx,888888);
    
    try {
      const prisma = await prismaClients.fetch(env.DB)
      
      const sender = await prisma.user.findUnique({
        where: { email: email.to as any },
      })

      console.log(sender,"查询发送者");
      
      if (sender) {
        await prisma.email.create({
          data: {
            subject: 'Hello with recipients',
            body: 'This email has recipients!',
            senderId: sender.id,
            recipients: {
              create: [
                { recipientEmail: 'recipient1@example.com' },
                { recipientEmail: 'recipient2@example.com' },
              ],
            },
          },
        });
      }else{
        console.log(`收件人不存在: ${email.to}`);
        console.log(email);
        
      }

    } catch (err: any) {
      console.error('邮件处理失败:', {
        name: err.name,
        message: err.message,
        stack: err.stack,
      });
      throw err;
    }

    // const inboxJSON = (await env.amailkv.get(message.to)) || "[]";
    // const inbox = JSON.parse(inboxJSON);
    // await inbox.push(email);
    // await env.amailkv.put(message.to, JSON.stringify(inbox), {
    //   expirationTtl: env.EMAIL_TIMEOUT,
    // });
  },
};

