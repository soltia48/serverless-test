import { Hono } from "hono";
import { apiV1Users } from "./api/v1/users";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/api/v1/users", apiV1Users);

export default app;
