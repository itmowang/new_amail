import { Hono } from "hono/dist/types/hono";
import { Context } from "hono/dist/types/context";
import type { Bindings } from '../main';

export default (app: Hono<{ Bindings: Bindings }>, path: string) => {
  // 刷新当前邮箱列表
  app.get(`${path}/test`, async (c: Context) => {

    return new Response(JSON.stringify([123]), { headers: { "content-type": "application/json" } });
  });
};
