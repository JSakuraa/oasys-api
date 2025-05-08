import createApp from "./lib/create-app";
import classesRoute from "./routes/classes/classes.route";
import meRoute from "./routes/me/me.route";
import achievementRoute from "./routes/users/achievements.route";
import inventoryRoute from "./routes/users/inventory.route";
import statsRoute from "./routes/users/stats.route";
import usersRoute from "./routes/users/users.route";

const app = createApp();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/users", usersRoute);
app.route("/", statsRoute);
app.route("/", inventoryRoute);
app.route("/", achievementRoute);
app.route("/classes", classesRoute);
app.route("/me", meRoute);

export default app;
