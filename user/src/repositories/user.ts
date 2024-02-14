import { Repository } from "components/repository";
import { User } from "models";

const UserRepository = new Repository(User);

export const createUser = async (data: typeof User) => {
    return await UserRepository.create(data);
};

export const getUser = async (data: Partial<typeof User>) => {
    return await UserRepository.get(data);
};

export const deleteUser = async (data: Partial<typeof User>) => {
    return await UserRepository.delete(data);
};

export const updateUser = async (
    data: Partial<typeof User>,
    newData: typeof User,
) => {
    return await UserRepository.update(data, newData);
};
