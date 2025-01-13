import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    // url: env.DATABASE_URL!,
    user: "postgres",
    host: "localhost",
    port: 5430,
    database: "test",
    password: "password",
    ssl: false,
  },
});
