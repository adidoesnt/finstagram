import { SES } from "@aws-sdk/client-ses";
import { getLogger } from "./logger";

const {
    AWS_REGION: region = "ap-southeast-1",
    EMAIL_FROM: from = "",
} = process.env;

const logger = getLogger("email");
const ses = new SES({
    region,
});

export const sendEmail = async (to: string, subject: string, text: string) => {
    const params = {
        Destination: {
            ToAddresses: [to],
        },
        Message: {
            Body: {
                Text: { Data: text },
            },
            Subject: { Data: subject },
        },
        Source: from,
    };

    return ses.sendEmail(params).then((data) => {
        logger.info(`Email sent to ${to}: ${data.MessageId}`);  
    }).catch((error) => {
        logger.error(`Error sending email to ${to}: ${error}`);  
    });
};
