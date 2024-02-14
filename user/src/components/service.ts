import { AnyItem } from "dynamoose/dist/Item";
import { User } from "./model";
import * as userRepository from "./repository";
import { hash } from "bun";
import { getLogger, sendEmail } from "utils";
import { SentMessageInfo } from "nodemailer";

const logger = getLogger("user:service");
const { CONFIRMATION_ENDPOINT: confirmationEndpoint = "" } = process.env;

export const createUser = async ({
    email,
    password,
}: typeof User): Promise<{
    createResult: AnyItem;
    emailResult: SentMessageInfo;
}> => {
    const passwordHash = String(hash(password));
    let createResult = await userRepository.createUser(email, passwordHash);
    let emailResult = await sendConfirmationEmail(email);
    return {
        createResult,
        emailResult,
    };
};

export const sendConfirmationEmail = async (
    email: string,
): Promise<SentMessageInfo> => {
    try {
        const subject = "Welcome to Finstagram!";
        let text =
            "You're almost done creating your account - we just need you to confirm your email address.";
        text += `"Click the link below to confirm your email address:\n${confirmationEndpoint}?email=${email}`;
        return await sendEmail(email, subject, text);
    } catch (error) {
        logger.error("unable to send confirmation email", error);
        await userRepository.deleteUser(email);
    }
};

export const confirmUser = async (
    email: string | undefined,
): Promise<AnyItem> => {
    if (!email) throw new Error("Email is required");
    return await userRepository.updateUser(email, { verified: true });
};

export const getUser = async (email: string): Promise<AnyItem> => {
    return await userRepository.getUser(email);
};

export const updateUser = async (
    email: string,
    user: typeof User,
): Promise<AnyItem> => {
    return await userRepository.updateUser(email, user);
};

export const deleteUser = async (email: string): Promise<void> => {
    return await userRepository.deleteUser(email);
};
