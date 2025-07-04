import PostalMime, { RawEmail } from "postal-mime";
import { Hono } from "hono";
import { cors } from "hono/cors";
import mail from "./src/mail";
import user from './src/user';
import domain from './src/domain';
import userEmailDomain from "./src/userEmailDomain";
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
domain(app, "/domain");
userEmailDomain(app, "/userEmailDomain");

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
    const email = await parser.parse(message.raw) as any;
    console.log(message); 
      
    try {
      const prisma = await prismaClients.fetch(env.DB)
      // 发送人
       const sender = email?.from?.address    
      //  发送人名称
      const senderName = email?.from?.name
      // 发送标题
      const subject = email.subject
      // 邮件内容
      const body = email.html
      // 收件人
      const toEmail = message.to || '[]'
      console.log(sender, senderName, subject, body, toEmail,454444);

      await prisma.email.create({
        data: {
          subject,
          body,
          recipientEmail:toEmail,
        },
      });

    } catch (err: any) {
      console.error('邮件处理失败:', {
        name: err.name,
        message: err.message,
        stack: err.stack,
      });
      throw err;
    }

  },
};

