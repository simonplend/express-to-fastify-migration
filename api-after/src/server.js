// src/server.js

import buildApp from "./app.js";

const fastify = await buildApp();

try {
  await fastify.listen(3000);
} catch (error) {
  fastify.log.error(error);
  process.exit(1);
}
