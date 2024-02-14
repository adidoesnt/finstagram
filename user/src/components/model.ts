import { model, Schema } from "dynamoose";

const userSchema = new Schema({
    email: { type: String, required: true, hashKey: true },
    passwordHash: { type: String, required: true },
    verified: { type: Boolean, default: false },
});

export const User = model("User", userSchema);
