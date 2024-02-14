import { AnyItem } from "dynamoose/dist/Item";
import { User } from "./model";

export const createUser = async (user: typeof User): Promise<AnyItem> => {
    return User.create(user);
};

export const getUser = async (uuid: string): Promise<AnyItem> => {
    return User.get(uuid);
};

export const updateUser = async (
    uuid: string,
    user: typeof User,
): Promise<AnyItem> => {
    return User.update({ uuid }, user);
};

export const deleteUser = async (uuid: string): Promise<void> => {
    await User.delete(uuid);
};
