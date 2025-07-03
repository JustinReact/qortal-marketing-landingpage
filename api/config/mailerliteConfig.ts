import dotenv from 'dotenv';

dotenv.config();

const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID; // Equivalent to SendGrid list
const MAILERLITE_SENDER_EMAIL = process.env.MAILERLITE_SENDER_EMAIL;

if (!MAILERLITE_API_KEY) {
    throw new Error('MAILERLITE_API_KEY is not defined in environment variables.');
}

if (!MAILERLITE_GROUP_ID) {
    throw new Error('MAILERLITE_GROUP_ID is not defined in environment variables.');
}

export {
    MAILERLITE_API_KEY,
    MAILERLITE_GROUP_ID,
    MAILERLITE_SENDER_EMAIL,
};
