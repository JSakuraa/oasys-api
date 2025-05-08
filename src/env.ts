import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.string().default("development"),
  DATABASE_URL: z.string().url(),
  CLERK_SECRET_KEY: z.string().min(1),
  CLERK_PUBLISHABLE_KEY: z.string().min(1),
  PORT: z
    .string()
    .default("9999")
    .transform((val) => Number.parseInt(val, 10)),
});

// biome-ignore lint/nursery/noProcessEnv: <explanation>
const env = envSchema.parse(process.env);

export default env;
