import { User } from "components/model";
import { Elysia } from "elysia";
import * as userController from "components/controller";

const { POST_SIGNUP_REDIRECT_URI: postSignupRedirect } = process.env;

export const signup = new Elysia({
    prefix: "/signup",
})
    .post("/", ({ body }) => {
        return userController.createUser(body as typeof User);
    })
    .get("/confirm", async ({ query, set }) => {
        const { email } = query;
        await userController.confirmUser(email);
        set.redirect = postSignupRedirect;
    });
