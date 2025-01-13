import "dotenv/config";
import express from "express";
import * as env from "./env";
import db from "./db";

console.log(db);

start();

function start() {
  const app = express();

  app.get("/health", (_req, res) => {
    res.status(200).send("OK");
  });

  app.listen(env.PORT, () => {
    console.log(`server started on port ${env.PORT}`);
  });
}
