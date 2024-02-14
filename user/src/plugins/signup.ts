import { User } from "components/model";
import { Elysia } from "elysia";
import * as userController from "components/controller";

export const signup = new Elysia({
    prefix: "/signup",
})
    .post("/", ({ body }) => {
        return userController.createUser(body as typeof User);
    })
    .get("/confirm", ({ query }) => {
        const { email } = query;
        return userController.confirmUser(email);
    });
