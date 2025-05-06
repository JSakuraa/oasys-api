import { Hono } from "hono";
import { achievements } from "../../db/dummy";

const achievementRoute = new Hono();

achievementRoute.get("/users/:id/achievements", (c) => {
  const id = c.req.param("id");
  const userAchievements = achievements.find((achievement) => achievement.userId === id);
  if (!achievements) {
    return c.notFound();
  }
  return c.json(userAchievements);
});

export default achievementRoute;
