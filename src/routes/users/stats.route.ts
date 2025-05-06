import { Hono } from "hono";
import { z } from "zod";
import { userStats } from "../../db/dummy";

const statsRoute = new Hono();

const updateStatsSchema = z.object({
  strength: z.number().optional(),
  agility: z.number().optional(),
  intelligence: z.number().optional(),
});

statsRoute.get("/users/:id/stats", (c) => {
  const id = c.req.param("id");
  const stats = userStats.find((stat) => stat.userId === id);
  if (!stats) {
    return c.notFound();
  }
  return c.json(stats);
});

statsRoute.patch("/users/:id/stats", async (c) => {
  const id = c.req.param("id");
  const usersStats = userStats.find((stat) => stat.userId === id);
  if (!usersStats) {
    return c.notFound();
  }

  const body = await c.req.json();
  const parsed = updateStatsSchema.safeParse(body);
  if (!parsed.success) {
    return c.json({ error: parsed.error.flatten() }, 400);
  }

  const updates = parsed.data;
  Object.assign(usersStats, updates);

  return c.json(usersStats);
});

export default statsRoute;
