import { Request, Response } from 'express';
import { saveSubscriber } from '../services/firebaseServices';
import isEmail from '../utils/validators';
import { addToMailerliteGroup } from '../services/mailerliteServices';

/**
 * Interface for the expected request body from the /subscribe endpoint
 */
interface SubscribeRequestBody {
    name: string;
    email: string;
}

/**
 * Handles user subscription by validating the input, sending a welcome email,
 * saving the subscriber to Firestore, and adding the email to the MailerLite group.
 */
const handleSubscription = async (
    req: Request<{}, {}, SubscribeRequestBody>,
    res: Response
): Promise<void> => {
    const { name, email } = req.body;

  // Input validation
    if (!name || !email) {
        res.status(400).json({ error: 'Missing name or email!' });
        return;
    }
    if (!isEmail(email)) {
        res.status(400).json({ error: 'Invalid email format!' });
        return;
    }

// Add subscriber to MailerLite group
    try {
        await addToMailerliteGroup(email, name);
    } catch (error) {
        console.error('[MailerLite List Error] Failed to add subscriber:', error);
        res.status(500).json({ error: 'Failed to add subscriber to email list. Please try again later.' });
        return;
    }

  // Save subscriber in Firestore
    try {
        await saveSubscriber({ name, email });
    } catch (error) {
        console.error('[Firestore Error] Failed to save subscriber:', error);
        res.status(500).json({ error: 'Failed to save subscriber. Please try again later.' });
        return;
    }


    res.status(200).json({
        message: 'Subscription successful.',
    });
};

export { handleSubscription };
