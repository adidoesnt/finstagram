import { getLogger } from "utils";
import { User } from "./model";
import * as userService from "./service";

const logger = getLogger("user:controller");

export const createUser = async (user: typeof User) => {
    const { email, password } = user;
    return await userService.createUser({
        email,
        password,
    } as unknown as typeof User);
};

export const confirmUser = async (email: string | undefined) => {
    try {
        logger.info(`Confirming user: ${email}`);
        return await userService.confirmUser(email);
    } catch (error) {
        logger.error(`Unable to confirm user ${email}`, error);
    }
};

export const getUser = async (email: string) => {
    return await userService.getUser(email);
};

export const updateUser = async (email: string, user: typeof User) => {
    return await userService.updateUser(email, user);
};

export const deleteUser = async (email: string) => {
    return await userService.deleteUser(email);
};
