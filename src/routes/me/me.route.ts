import { getAuth } from "@hono/clerk-auth";
import { Hono } from "hono";

const meRoute = new Hono();

meRoute.get("/", (c) => {
  const auth = getAuth(c);

  if (!auth?.userId) {
    return c.json({
      message: "You are not logged in",
      authInfo: auth || "no auth info",
    });
  }

  return c.json({
    message: "You are logged in",
    userId: auth.userId,
  });
});

export default meRoute;
