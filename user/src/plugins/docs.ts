import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";

export const docs = new Elysia().use(
    swagger({
        autoDarkMode: true,
        path: "/docs",
        theme: {
            dark: "darkly",
            light: "cerulean",
        },
    }),
);
