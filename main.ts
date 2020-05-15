import { Application, Context } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();

app.use((ctx: Context) => {
  ctx.response.body = { message: 'Hello World!' };
});

console.log('Listening on: http://localhost:8080');
await app.listen({ port: 8080 });
