import Fastify from 'fastify';

const server = Fastify({
  logger: true,
  disableRequestLogging: true
});

server.register(import('./routes/exercises'), {prefix: '/exercises'})
server.register(import('./routes/parts'), {prefix: '/parts'})

server.listen({ port: 8000, host: '0.0.0.0' }, (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});