import { Application } from 'https://deno.land/x/oak/mod.ts';
import logger from './middlewares/logger.ts';
import timer from './middlewares/timer.ts';
import router from './router.ts';

const app = new Application();

app.use(logger);
app.use(timer);

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
