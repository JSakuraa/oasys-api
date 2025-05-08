import { clerkMiddleware } from "@hono/clerk-auth";
import { Hono } from "hono";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";
import { pinoLogger } from "../middleware/logger";
import { syncUsersToDb } from "../middleware/syncUsersToDb";
import type { AppBindings } from "./types";

export default function createApp() {
  const app = new Hono<AppBindings>();

  app.use(serveEmojiFavicon("👾"));
  app.use(pinoLogger());
  app.use(clerkMiddleware());
  app.use(syncUsersToDb());

  app.notFound(notFound);
  app.onError(onError);

  return app;
}
