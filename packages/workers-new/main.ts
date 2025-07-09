import PostalMime, { RawEmail } from "postal-mime";
import { Hono } from "hono";
import { cors } from "hono/cors";
import mail from "./src/mail";
import user from './src/user';
import domain from './src/domain';
import userEmailDomain from "./src/userEmailDomain";
import { HTTPException } from "hono/http-exception";
import prismaClients from './lib/prismaClient'

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
    const prisma = await prismaClients.fetch(env.DB);

    try {
      // 解析原始邮件数据
      const parsedEmail = await parser.parse(message.raw) as any;

      // 1. 提取发件人邮箱地址
      const senderEmail = parsedEmail?.from?.address;
      if (!senderEmail) {
        console.error("邮件处理失败：找不到发件人地址。");
        // 如果没有发件人，则停止处理。在真实场景中，您可能希望退回邮件。
        return;
      }

      // 2. 根据发件人邮箱查找用户，并同时加载其发信箱
      const senderUser = await prisma.user.findUnique({
        where: { email: senderEmail },
        include: {
          outbox: true, // 预加载发信箱以检查其是否存在
        },
      });

      // 3. 如果系统中不存在该用户，则拒绝处理
      if (!senderUser) {
        console.error(`邮件处理失败：发件人 ${senderEmail} 不是系统授权用户。`);
        // 停止处理，因为发件人未经授权
        return;
      }

      // 4. 确定用户的发信箱ID。如果不存在，则创建一个。
      let outboxId: string;
      if (senderUser.outbox) {
        // 如果用户已经有发信箱，直接使用其ID
        outboxId = senderUser.outbox.id;
      } else {
        // 如果用户没有发信箱，为他创建一个新的一对一关联的发信箱
        const newOutbox = await prisma.outbox.create({
          data: {
            userId: senderUser.id,
          },
        });
        outboxId = newOutbox.id;
        console.log(`为用户 ${senderUser.email} 创建了新的发信箱。`);
      }

      // 5. 提取邮件的其他详细信息
      const subject = parsedEmail.subject || '无主题';
      const body = parsedEmail.html || parsedEmail.text || ''; // 优先使用HTML内容，否则回退到纯文本
      const recipientEmail = message.to; // 收件人地址来自Cloudflare的信封`to`字段

      // 6. 在数据库中创建邮件记录，并关联到发信箱
      await prisma.email.create({
        data: {
          subject,
          body,
          recipientEmail,
          senderEmail, // 发件人地址
          outboxId,    // 关联到用户的发信箱
        },
      });

      console.log(`成功处理并存储了来自 ${senderEmail} 发往 ${recipientEmail} 的邮件。`);

    } catch (err: any) {
      console.error('邮件处理过程中发生严重错误:', {
        name: err.name,
        message: err.message,
        stack: err.stack,
      });
      // 重新抛出错误可能会导致Cloudflare重试邮件投递。
      // 对于永久性错误（如“用户未找到”），我们已经通过返回来处理，不应重抛。
      // 对于临时性错误（如数据库连接问题），重抛可能是合适的。
      throw err;
    }
  },
};

