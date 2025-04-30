import { Hono } from "hono";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";
import { pinoLogger } from "../middleware/logger";
import type { AppBindings } from "./types";

export default function createApp() {
  const app = new Hono<AppBindings>();

  app.use(serveEmojiFavicon("👾"));
  app.use(pinoLogger());

  app.notFound(notFound);
  app.onError(onError);

  return app;
}
