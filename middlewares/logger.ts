import { Context } from 'https://deno.land/x/oak/mod.ts';

export default async function logger(ctx: Context, next: Function) {
  await next();
  const rt = ctx.response.headers.get('X-Response-Time');
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
}
