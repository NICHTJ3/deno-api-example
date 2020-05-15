import {Context, Router} from 'https://deno.land/x/oak/mod.ts';

const router = new Router();
router.get('/', (ctx: Context) => {
  ctx.response.body = { message: 'Hello World!' };
});

export default router;
