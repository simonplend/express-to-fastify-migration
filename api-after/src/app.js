// src/app.js

import express from "express";

import routes from "./routes.js";

export default function buildApp() {
  const app = express();

  app.use("/user", routes);

  return app;
}
