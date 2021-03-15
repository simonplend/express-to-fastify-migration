// src/routes.js

import cors from "cors";

export default async function routes(fastify) {
  fastify.use(cors({ origin: true }));

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
