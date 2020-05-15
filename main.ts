import app from './app.ts';

const server = app.listen({ port: 8080 });
console.log('Listening on: http://localhost:8080');
await server;
