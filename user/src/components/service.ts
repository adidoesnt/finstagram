import { AnyItem } from "dynamoose/dist/Item";
import { User } from "./model";
import * as userRepository from "./repository";

export const createUser = async (user: typeof User): Promise<AnyItem> => {
    return await userRepository.createUser(user);
};

export const getUser = async (uuid: string): Promise<AnyItem> => {
    return await userRepository.getUser(uuid);
};

export const updateUser = async (
    uuid: string,
    user: typeof User,
): Promise<AnyItem> => {
    return await userRepository.updateUser(uuid, user);
};

export const deleteUser = async (uuid: string): Promise<void> => {
    return await userRepository.deleteUser(uuid);
};