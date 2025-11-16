// services/firebaseServices.ts
import { db } from "../config/firebaseConfig";
import { Firestore, FieldValue } from "firebase-admin/firestore";
import crypto from "crypto";

const COLLECTIONS = {
  SUBSCRIBERS: "subscribers"
};

const QORT_COLLECTIONS = {
  EMAILS: "qortPayoutsByEmail",
  IPS: "qortIpCounts"
} as const;

const QORT_PAYOUT_AMOUNTS = {
  STEP1: 2,
  STEP2: 4
} as const;

/**
 * Checks if a subscriber with the given email exists.
 * @param {string} email - The email to check.
 * @returns {Promise<boolean>}
 */
export const checkIfEmailExists = async (email: string): Promise<boolean> => {
  const snapshot = await db
    .collection(COLLECTIONS.SUBSCRIBERS)
    .where("email", "==", email)
    .limit(1)
    .get();

  return !snapshot.empty;
};

/**
 * Saves or updates a subscriber document in Firestore.
 * @param {Object} params
 * @param {string} params.name
 * @param {string} params.email
 * @returns {Promise<{ success: boolean, data: Object }>}
 */
export const saveSubscriber = async ({
  name,
  email
}: {
  name: string;
  email: string;
}) => {
  const timestamp = new Date();
  const subscriberData = {
    name,
    email,
    timestamp,
    blurb: ""
  };

  try {
    const exists = await checkIfEmailExists(email);

    if (exists) {
      return { success: true, data: subscriberData };
    }
    await db.collection(COLLECTIONS.SUBSCRIBERS).add(subscriberData);
    return { success: true, data: subscriberData };
  } catch (error) {
    console.error("[Firestore Error] Failed to save subscriber:", error);
    throw new Error("Could not save subscriber.");
  }
};

/**
 * Adds or updates a blurb to an existing subscriber.
 * @param {Object} params
 * @param {string} params.email
 * @param {string} params.blurb
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export const addBlurbByEmail = async ({
  email,
  blurb
}: {
  email: string;
  blurb: string;
}) => {
  try {
    const subscriberData = await getSubscriberByEmail(email);

    if (!subscriberData) {
      throw new Error(`Subscriber not found for email: ${email}`);
    }

    await db
      .collection(COLLECTIONS.SUBSCRIBERS)
      .doc(subscriberData.id)
      .update({ blurb });

    return { success: true, message: `Blurb added for ${email}` };
  } catch (error) {
    console.error("Failed to add blurb:", error);
    throw new Error("Could not add blurb.");
  }
};

/**
 * Fetches a subscriber by their email address.
 * @param {string} email - The email of the subscriber.
 * @returns {Promise<Object>} - The subscriber data.
 */
const getSubscriberByEmail = async (
  email: string
): Promise<{ id: string; [key: string]: any }> => {
  const snapshot = await db
    .collection(COLLECTIONS.SUBSCRIBERS)
    .where("email", "==", email)
    .get();

  if (!snapshot.empty) {
    const doc = snapshot.docs[0];
    return { id: doc.id, ...doc.data() };
  } else {
    throw new Error("Subscriber not found.");
  }
};

/**
 * Retrieves all subscribers with name and blurb.
 * @returns {Promise<Array<{ name: string; blurb: string }>>}
 */
export const getAllBlurbs = async (): Promise<
  { name: string; blurb: string }[]
> => {
  try {
    const snapshot = await db.collection(COLLECTIONS.SUBSCRIBERS).get();

    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        name: data.name || "",
        blurb: data.blurb || ""
      };
    });
  } catch (error) {
    console.error("[Firestore Error] Failed to fetch subscribers:", error);
    throw new Error("Could not retrieve subscribers.");
  }
};

/**
 * Retrieves all subscribers with email and name
 * @returns {Promise<Array<{ email: string; name: string }>>}
 */
export const getAllSubscribers = async (): Promise<
  { email: string; name: string }[]
> => {
  try {
    const snapshot = await db.collection(COLLECTIONS.SUBSCRIBERS).get();

    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        email: data.email || "",
        name: data.name || ""
      };
    });
  } catch (error) {
    console.error("[Firestore Error] Failed to fetch subscribers:", error);
    throw new Error("Could not retrieve subscribers.");
  }
};

// Allow only 1 payout per IP (i.e., second attempt from same IP is blocked).
// Change to 2 if you want to allow up to 2 payouts per IP and block the 3rd.
const IP_MAX_PREVIOUS_PAYOUTS = 2;

const HASH_SECRET = process.env.HASH_SECRET || "dev-secret-change-me";

// Deterministic, keyed hash (better than plain SHA for privacy)
function hmacSha256Hex(value: string) {
  return crypto.createHmac("sha256", HASH_SECRET).update(value).digest("hex");
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

/**
 * Checks & reserves a QORT payout atomically:
 * - Block if email already paid (emailHash doc exists).
 * - Block if IP has ≥ IP_MAX_PREVIOUS_PAYOUTS successful payouts.
 * - Otherwise, write:
 *    - qortPayoutsByEmail/{emailHash} with createdAt + ipHash
 *    - qortIpCounts/{ipHash}.count += 1
 *
 * @returns { allowed: boolean, reason?: string, ipCount?: number }
 */
export async function checkAndReserveQortPayout(params: {
  email: string;
  ip: string;
  qortStep: number;
}) {
  const email = normalizeEmail(params.email);
  const ip = (params.ip || "").trim();

  if (!email)
    return { allowed: false, reason: "missing_email", ipCount: undefined };
  if (!ip) return { allowed: false, reason: "missing_ip", ipCount: undefined };

  const emailHash = hmacSha256Hex(`email:${email}`);
  const ipHash = hmacSha256Hex(`ip:${ip}`);

  const emailDocRef = db.collection(QORT_COLLECTIONS.EMAILS).doc(emailHash);
  const ipDocRef = db.collection(QORT_COLLECTIONS.IPS).doc(ipHash);

  const result = await db.runTransaction(async (t) => {
    const emailSnap = await t.get(emailDocRef);
    let prevQort: number = 0;

    // If email exists, validate based on qortStep
    if (emailSnap.exists) {
      prevQort = emailSnap.data()?.qort ?? 0;

      if (params.qortStep === 1) {
        if (!(prevQort < 2)) {
          return {
            allowed: false,
            reason: "invalid_qort_range_step1",
            ipCount: undefined
          } as const;
        }
      } else if (params.qortStep === 2) {
        if (prevQort === 4) {
          return {
            allowed: false,
            reason: "invalid_qort_range_step2",
            ipCount: undefined
          } as const;
        }
      } else {
        return {
          allowed: false,
          reason: "invalid_qort_range",
          ipCount: undefined
        } as const;
      }
    }

    // IP limit check
    const ipSnap = await t.get(ipDocRef);
    const currentCount = ipSnap.exists ? ipSnap.data()?.count ?? 0 : 0;

    if (currentCount >= IP_MAX_PREVIOUS_PAYOUTS) {
      return {
        allowed: false,
        reason: "ip_limit_reached",
        ipCount: currentCount
      } as const;
    }

    // Select qort amount depending on step
    const qort =
      params.qortStep === 1
        ? QORT_PAYOUT_AMOUNTS.STEP1
        : QORT_PAYOUT_AMOUNTS.STEP2;

    // Save/overwrite email record
    t.set(emailDocRef, {
      createdAt: FieldValue.serverTimestamp(),
      ipHash,
      qort,
      version: 1
    });

    // Increment IP counter
    if (params.qortStep === 1) {
      t.set(
        ipDocRef,
        {
          count: FieldValue.increment(1),
          updatedAt: FieldValue.serverTimestamp()
        },
        { merge: true }
      );
    }

    return {
      allowed: true,
      reason: "ok",
      ipCount: currentCount,
      existingQort: prevQort
    } as const;
  });

  return result;
}

/**
 * Optional rollback if on-chain send failed AFTER reservation.
 * Decrements IP count (to a minimum of 0) and removes the email doc.
 * Use only if you call it right after a failed payout.
 */
export async function rollbackQortPayout(params: {
  email: string;
  ip: string;
  qortStep?: number;
}) {
  const email = normalizeEmail(params.email);
  const ip = (params.ip || "").trim();
  const qortStep = params.qortStep ?? 1;

  if (!email || !ip) return;

  const emailHash = hmacSha256Hex(`email:${email}`);
  const ipHash = hmacSha256Hex(`ip:${ip}`);

  const emailDocRef = db.collection(QORT_COLLECTIONS.EMAILS).doc(emailHash);
  const ipDocRef = db.collection(QORT_COLLECTIONS.IPS).doc(ipHash);

  // ✅ Step 2 rollback: keep the record, just revert to the Step 1 amount
  if (qortStep === 2) {
    await db.runTransaction(async (t) => {
      const emailSnap = await t.get(emailDocRef);
      if (!emailSnap.exists) return;

      t.set(
        emailDocRef,
        {
          qort: QORT_PAYOUT_AMOUNTS.STEP1,
          updatedAt: FieldValue.serverTimestamp()
        },
        { merge: true }
      );
    });
    return;
  }

  await db.runTransaction(async (t) => {
    // ✅ All reads first
    const emailSnap = await t.get(emailDocRef);
    const ipSnap = await t.get(ipDocRef);

    // 📝 Then writes/deletes

    if (emailSnap.exists) {
      t.delete(emailDocRef);
    }

    if (ipSnap.exists) {
      const curr = ipSnap.data()?.count ?? 0;
      const newCount = Math.max(0, curr - 1);

      t.set(
        ipDocRef,
        {
          count: newCount,
          updatedAt: FieldValue.serverTimestamp()
        },
        { merge: true }
      );
    }
  });
}

/**
 * Utility checks (read-only)
 */
export async function hasEmailBeenPaid(email: string) {
  const emailHash = hmacSha256Hex(`email:${normalizeEmail(email)}`);
  const doc = await db.collection(QORT_COLLECTIONS.EMAILS).doc(emailHash).get();
  return doc.exists;
}

export async function getIpPayoutCount(ip: string) {
  const ipHash = hmacSha256Hex(`ip:${(ip || "").trim()}`);
  const doc = await db.collection(QORT_COLLECTIONS.IPS).doc(ipHash).get();
  return doc.exists ? doc.data()?.count ?? 0 : 0;
}
