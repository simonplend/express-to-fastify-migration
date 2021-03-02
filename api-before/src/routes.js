// src/routes.js

import express from "express";
import cors from "cors";

const router = express.Router();

router.use(express.json());

router.use(cors({ origin: true }));

// src/routes.js

router.post("/", function createUser(request, response, next) {
  const newUser = request.body;

  if (!newUser) {
    return next(new Error("Error creating user"));
  }

  response.status(201).json(newUser);
});

// src/routes.js

router.get("/:user_id", function getUser(request, response, next) {
  const user = {
    id: request.params.user_id,
    first_name: "Bobinsky",
    last_name: "Oso",
  };

  response.json(user);
});

// src/routes.js

export default router;
