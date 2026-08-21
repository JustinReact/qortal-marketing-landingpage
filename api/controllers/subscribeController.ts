import { Request, Response } from "express";
import { saveSubscriber } from "../services/firebaseServices";
import isEmail from "../utils/validators";
import { addToMailerliteGroup } from "../services/mailerliteServices";
import {
  MAILERLITE_FREE_GUIDE_GROUP_ID,
  MAILERLITE_GROUP_ID
} from "../config/mailerliteConfig";

type SubscribeSource = "ebook" | "free-guide";

interface SubscribeRequestBody {
  name: string;
  email: string;
  source?: SubscribeSource | string;
}

const normalizeSource = (source?: string): SubscribeSource => {
  return source === "free-guide" ? "free-guide" : "ebook";
};

/**
 * Handles user subscription by validating the input,
 * adding the email to the MailerLite group for that magnet,
 * and saving the subscriber to Firestore.
 * Ebook / free-guide delivery is handled by MailerLite automations.
 */
const handleSubscription = async (
  req: Request<{}, {}, SubscribeRequestBody>,
  res: Response
): Promise<void> => {
  const { name, email } = req.body;
  const source = normalizeSource(req.body.source);

  if (!name || !email) {
    res.status(400).json({ error: "Missing name or email!" });
    return;
  }
  if (!isEmail(email)) {
    res.status(400).json({ error: "Invalid email format!" });
    return;
  }

  const groupId =
    source === "free-guide"
      ? MAILERLITE_FREE_GUIDE_GROUP_ID
      : MAILERLITE_GROUP_ID;

  if (!groupId) {
    const missingVar =
      source === "free-guide"
        ? "MAILERLITE_FREE_GUIDE_GROUP_ID"
        : "MAILERLITE_GROUP_ID";
    console.error(`[Subscribe] ${missingVar} is not configured.`);
    res.status(500).json({
      error: "Mailing list is not configured. Please try again later."
    });
    return;
  }

  try {
    await addToMailerliteGroup(email, name, groupId);
  } catch (error) {
    console.error("[MailerLite List Error] Failed to add subscriber:", error);
    res.status(500).json({
      error: "Failed to add subscriber to email list. Please try again later."
    });
    return;
  }

  try {
    await saveSubscriber({ name, email, source });
  } catch (error) {
    console.error("[Firestore Error] Failed to save subscriber:", error);
    res
      .status(500)
      .json({ error: "Failed to save subscriber. Please try again later." });
    return;
  }

  res.status(200).json({
    message: "Subscription successful."
  });
};

export { handleSubscription };
