import { Application, Context } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();

// Logger
app.use(async (ctx: Context, next: Function) => {
  await next();
  const rt = ctx.response.headers.get('X-Response-Time');
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx: Context, next: Function) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set('X-Response-Time', `${ms}ms`);
});

app.use((ctx: Context) => {
  ctx.response.body = { message: 'Hello World!' };
});

const server = app.listen({ port: 8080 });
console.log('Listening on: http://localhost:8080');
await server;
