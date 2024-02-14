import { AnyItem } from "dynamoose/dist/Item";
import { User } from "./model";

export const createUser = async (
    email: string,
    passwordHash: string,
): Promise<AnyItem> => {
    return User.create({ email, passwordHash, verified: false });
};

export const getUser = async (email: string): Promise<AnyItem> => {
    return User.get(email);
};

export const updateUser = async (
    email: string,
    data: Partial<typeof User>,
): Promise<AnyItem> => {
    return User.update(email, data);
};

export const deleteUser = async (email: string): Promise<void> => {
    await User.delete(email);
};
