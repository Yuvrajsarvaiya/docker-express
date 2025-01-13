import "dotenv/config";
import express from "express";
import * as env from "./env";
import db from "./db";
import { usersTabel } from "./db/schema";
import { registerUserSchema } from "./schemas";

start();

function start() {
  const app = express();
  app.use(express.json());

  app.get("/health", (_req, res) => {
    res.status(200).send("OK");
  });

  app.post("/register", async (req, res) => {
    try {
      const { success, data, error } = registerUserSchema.safeParse(req.body);
      if (!success) {
        res.status(400).json({
          error,
        });
        return;
      }

      const newUser = await db
        .insert(usersTabel)
        .values(data)
        .returning({ id: usersTabel.id });
      console.log(newUser);

      res.status(201).json({ message: "new user created" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal Server error" });
    }
  });

  app.get("/users", async (_req, res) => {
    try {
      const users = await db
        .select({
          email: usersTabel.email,
          name: usersTabel.name,
          age: usersTabel.age,
        })
        .from(usersTabel);
      res.status(200).json({ data: users });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal Server error" });
    }
  });

  app.listen(env.PORT, () => {
    console.log(`server started on port ${env.PORT}`);
  });
}
