import axios from "axios";
import {
  MAILERLITE_API_KEY,
  MAILERLITE_GROUP_ID,
  MAILERLITE_SENDER_EMAIL
} from "../config/mailerliteConfig";

import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

/**
 * Add a contact to MailerLite group (list)
 */
export const addToMailerliteGroup = async (
  email: string,
  name: string
): Promise<void> => {
  try {
    const response = await axios.post(
      `https://api.mailerlite.com/api/v2/groups/${MAILERLITE_GROUP_ID}/subscribers`,
      {
        email,
        name
      },
      {
        headers: {
          "X-MailerLite-ApiKey": MAILERLITE_API_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    if (response.status === 200) {
      console.log("[MailerLite] Subscriber added successfully");
    } else {
      throw new Error("Unexpected response from MailerLite");
    }
  } catch (error: any) {
    console.error(
      "[MailerLite Group] Error:",
      error?.response?.data || error.message
    );
    throw new Error("Failed to add subscriber to MailerLite group");
  }
};

const mailerSend = new MailerSend({
  apiKey: process.env.MAILER_SENDING_TOKEN!
});

const from = new Sender(process.env.MAILERSEND_SENDER_EMAIL!, "Qortal Support");

export async function sendTransactionalEmail(
  toEmail: string,
  subject: string,
  html: string,
  text?: string
) {
  const recipients = [new Recipient(toEmail)];
  const params = new EmailParams()
    .setFrom(from)
    .setTo(recipients)
    .setSubject(subject)
    .setHtml(html)
    .setText(text ?? html.replace(/<[^>]+>/g, ""));

  await mailerSend.email.send(params); // resolves on success, throws on non-2xx
}
