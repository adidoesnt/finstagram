import { User } from "./model";
import * as userService from "./service";

export const createUser = async (user: typeof User) => {
    return await userService.createUser(user);
};

export const getUser = async (uuid: string) => {
    return await userService.getUser(uuid);
};

export const updateUser = async (uuid: string, user: typeof User) => {
    return await userService.updateUser(uuid, user);
};

export const deleteUser = async (uuid: string) => {
    return await userService.deleteUser(uuid);
};
