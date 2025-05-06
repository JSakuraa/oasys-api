import { Hono } from "hono";
import { users } from "../../db/dummy";

const usersRoute = new Hono();

usersRoute.get("/", (c) => c.json(users));

usersRoute.get("/:id", (c) => {
  const id = c.req.param("id");
  const user = users.find((user) => user.id === id);
  if (!user) {
    return c.notFound();
  }
  return c.json(user);
});

export default usersRoute;
