import { z } from "zod";

export const registerUserSchema = z.object({
  name: z.string().min(1, { message: "name is required" }),
  email: z.string().min(1).email({ message: "Invalid email" }),
  age: z.number(),
  password: z.string().min(6).max(20),
});
