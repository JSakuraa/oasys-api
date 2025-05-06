import { Hono } from "hono";
import { classes } from "../../db/dummy";

const classesRoute = new Hono();

classesRoute.get("/", (c) => c.json(classes));

classesRoute.get("/:id", (c) => {
  const id = c.req.param("id");
  const classInfo = classes.find((classItem) => classItem.id === id);
  if (!classInfo) {
    return c.notFound();
  }
  return c.json(classInfo);
});

classesRoute.post("/", async (c) => {
  const body = await c.req.json();
  const newClass = { ...body, id: crypto.randomUUID() };
  classes.push(newClass);
  return c.json(newClass, 201);
});

export default classesRoute;
