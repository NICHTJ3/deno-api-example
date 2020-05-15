import { Context } from 'https://deno.land/x/oak/mod.ts';

export default async function timer(ctx: Context, next: Function) {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set('X-Response-Time', `${ms}ms`);
}
