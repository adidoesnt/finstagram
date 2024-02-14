import { AnyItem } from "dynamoose/dist/Item";
import { User } from "./model";

export const createUser = async (
    email: string,
    passwordHash: string,
): Promise<AnyItem> => {
    return User.create({ email, passwordHash, verified: false });
};

export const getUser = async (uuid: string): Promise<AnyItem> => {
    return User.get(uuid);
};

export const updateUser = async (
    uuid: string,
    user: Partial<typeof User>,
): Promise<AnyItem> => {
    return User.update({ uuid }, user);
};

export const deleteUser = async (uuid: string): Promise<void> => {
    await User.delete(uuid);
};
