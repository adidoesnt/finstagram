import { Elysia } from "elysia";
import { docs, health } from "plugins";
import { getLogger, initDb } from "utils";

const { PORT: port = 3001 } = process.env;
const logger = getLogger("index");

const app = new Elysia({
    prefix: "/user",
})
    .use(docs)
    .use(health)
    .listen(port);

const { server } = app;
if (server) {
    const { hostname, port } = server;
    initDb();
    logger.info(`🦊 user service is running at ${hostname}:${port}`);
}
