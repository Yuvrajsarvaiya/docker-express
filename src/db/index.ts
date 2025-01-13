import { drizzle } from "drizzle-orm/node-postgres";
import * as env from "../env";

const db = drizzle(env.DATABASE_URL!);

export default db;
