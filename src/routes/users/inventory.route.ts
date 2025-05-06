import { Hono } from "hono";
import { userInventory } from "../../db/dummy";

const inventroyRoute = new Hono();

inventroyRoute.get("/users/:id/inventory", (c) => {
  const id = c.req.param("id");
  const inventory = userInventory.find((item) => item.userId === id);
  if (!inventory) {
    return c.notFound();
  }
  return c.json(inventory);
});

export default inventroyRoute;
