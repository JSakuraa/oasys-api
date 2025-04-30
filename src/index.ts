import { serve } from "bun";
import env from "./env";
import app from "./app";

const port = Number(env.PORT || 9999);

console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port
})