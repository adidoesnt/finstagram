import { model, Schema } from "dynamoose";

const userSchema = new Schema({
    username: { type: String, required: true },
    uuid: { type: String, required: true, hashKey: true },
    email: { type: String, required: true },
    passwordHash: { type: String, required: true },
});

export const User = model("User", userSchema);
