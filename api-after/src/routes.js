// src/routes.js

import CorsPlugin from "fastify-cors";

export default async function routes(fastify) {
  fastify.register(CorsPlugin, { origin: true });

  fastify.post("/", async function createUser(request, reply) {
    const newUser = request.body;

    if (!newUser) {
      throw new Error("Error creating user");
    }

    reply.status(201).send(newUser);
  });

  fastify.get("/:user_id", async function getUser(request, reply) {
    const user = {
      id: request.params.user_id,
      first_name: "Bobinsky",
      last_name: "Oso",
    };

    reply.send(user);
  });
}
