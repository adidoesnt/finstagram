import { Elysia } from "elysia";

export const health = new Elysia({
    prefix: "/health",
}).get("/", () => "user service OK");
