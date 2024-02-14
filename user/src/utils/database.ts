import dynamoose from "dynamoose";
import { getLogger } from "./logger";

const {
    NODE_ENV,
    DB_HOST = "localhost",
    DB_PORT = 8000,
    AWS_ACCESS_KEY_ID: accessKeyId = "",
    AWS_SECRET_ACCESS_KEY: secretAccessKey = "",
    AWS_REGION: region = "ap-southeast-1",
} = process.env;

const logger = getLogger("database");

export const initDb = () => {
    try {
        if (NODE_ENV === "DEV") {
            const URI = `http://${DB_HOST}:${DB_PORT}`;
            dynamoose.aws.ddb.local(URI);
            logger.info(`connected to local dynamodb at ${URI}`);
        } else {
            logger.info("connecting to remote AWS dynamodb");
            const ddb = new dynamoose.aws.ddb.DynamoDB({
                credentials: {
                    accessKeyId,
                    secretAccessKey,
                },
                region,
            });
            dynamoose.aws.ddb.set(ddb);
        }
    } catch (error) {
        logger.error(
            `error initialising DB connection in ${NODE_ENV} environment`,
            error,
        );
    }
};
