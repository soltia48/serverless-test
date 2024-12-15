import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Context } from "hono";
import { Pool } from "pg";

export const getPrisma = (c: Context) => {
  const pool = new Pool({
    connectionString: c.env.HYPERDRIVE.connectionString,
    max: 1,
  });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });
  return prisma;
};
