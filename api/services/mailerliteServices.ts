import axios from 'axios';
import {
    MAILERLITE_API_KEY,
    MAILERLITE_GROUP_ID,
} from '../config/mailerliteConfig';

/**
 * Add a contact to MailerLite group (list)
 */
export const addToMailerliteGroup = async (email: string, name: string): Promise<void> => {
    try {
        const response = await axios.post(
            `https://api.mailerlite.com/api/v2/groups/${MAILERLITE_GROUP_ID}/subscribers`,
            {
                email,
                name
            },
            {
                headers: {
                    'X-MailerLite-ApiKey': MAILERLITE_API_KEY,
                    'Content-Type': 'application/json',
                },
            }
        );

        if (response.status === 200) {
            console.log('[MailerLite] Subscriber added successfully');
        } else {
            throw new Error('Unexpected response from MailerLite');
        }
    } catch (error: any) {
        console.error('[MailerLite Group] Error:', error?.response?.data || error.message);
        throw new Error('Failed to add subscriber to MailerLite group');
    }
};
