import { Context } from "hono";

// 响应数据
export function response(c: Context, data: any = null, msg = 'ok', code = 200) {
    return c.json({ code, msg, data });
}
