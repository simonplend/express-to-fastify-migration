// src/app.js

import Fastify from "fastify";

import routes from "./routes.js";

export default async function buildApp() {
  const fastify = Fastify({
    logger: true,
  });

  fastify.register(routes, { prefix: "/user" });

  return fastify;
}
