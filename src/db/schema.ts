import { pgTable, integer, varchar } from "drizzle-orm/pg-core";

export const usersTabel = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull().unique("idx_users_email"),
  password: varchar().notNull(),
  name: varchar({ length: 255 }).notNull(),
  age: integer(),
});
