// src/server.js

import buildApp from "./app.js";

const express = buildApp();

express.listen(3000, () => {
  console.log("Example app listening at http://localhost:3000");
});
