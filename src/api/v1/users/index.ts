import { Hono } from "hono";

import { getPrisma } from "../../../get-prisma";

type Bindings = {
  HYPERDRIVE: Hyperdrive;
};

export const apiV1Users = new Hono<{ Bindings: Bindings }>();

apiV1Users.get("/", async (c) => {
  const prisma = getPrisma(c);
  let users = await prisma.user.findMany();
  return c.json(users);
});
