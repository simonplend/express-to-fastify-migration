// src/app.js

import Fastify from "fastify";
import ExpressPlugin from "fastify-express";

import routes from "./routes.js";

export default async function buildApp() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(ExpressPlugin);

  fastify.register(routes, { prefix: "/user" });

  return fastify;
}
