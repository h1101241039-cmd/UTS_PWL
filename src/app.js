import { Hono } from "hono";
import router from "./routes/web";
import { serveStatic } from "hono/bun";

const app = new Hono();

// Middleware currentPath HARUS di atas
app.use("*", async (c, next) => {
    c.set("currentPath", c.req.path);
    await next();
});

// Static files — root langsung ke workspace
app.use("/css/*", serveStatic({ root: "./src/public" }));

// Routes
app.route("/", router);

export default {
    port: 3000,
    fetch: app.fetch,
};
