import { createClerkClient } from "@clerk/backend";
import { getAuth } from "@hono/clerk-auth";
import { eq } from "drizzle-orm";
import type { MiddlewareHandler } from "hono";
import { db } from "../db";
import { users } from "../db/schema";
import env from "../env";

export const syncUsersToDb = (): MiddlewareHandler => {
  return async (c, next) => {
    const auth = getAuth(c);

    if (auth?.userId) {
      try {
        const clerk = createClerkClient({ secretKey: env.CLERK_SECRET_KEY });
        const user = await clerk.users.getUser(auth.userId);

        const existingUser = await db.select().from(users).where(eq(users.id, user.id)).limit(1);

        if (existingUser.length === 0) {
          await db.insert(users).values({
            id: user.id,
            email: user.emailAddresses[0]?.emailAddress,
            firstName: user.firstName,
            lastName: user.lastName,
          });
        }
      } catch (error) {
        console.error("Error syncing user with database.", error);
      }
    }

    await next();
  };
};
