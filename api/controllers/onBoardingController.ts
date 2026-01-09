import { Request, Response } from "express";
import isEmail from "validator/lib/isEmail";
import { sendTransactionalEmail } from "../services/mailerliteServices";
import crypto from "crypto";
import { codes } from "../lib/codeStore";
import jwt from "jsonwebtoken";
import {
  checkAndReserveQortPayout,
  rollbackQortPayout
} from "../services/firebaseServices";
import { hasQortalName, isNewUser } from "../services/qortalServices";

const {
  sendCoin,
  validateAddress
} = require("../qortal/transactions/transactions");

const JWT_SECRET = process.env.JWT_SECRET as string;

interface SendCodeRequestBody {
  email: string;
  qortalAddress: string;
}
interface VerifyCodeRequestBody {
  email: string;
  code: string;
  qortStep: number;
  qortalAddress: string;
}
const handleSendCode = async (
  req: Request<{}, {}, SendCodeRequestBody>,
  res: Response
): Promise<void> => {
  try {
    const rawEmail = req.body.email;
    const email = rawEmail?.trim().toLowerCase();
    const address = req.body.qortalAddress?.trim();
    if (!email) {
      res.status(400).json({ error: "Missing email!" });
      return;
    }

    if (!isEmail(email)) {
      res.status(400).json({ error: "Invalid email format!" });
      return;
    }
    if (!validateAddress(address)) {
      res.status(400).json({ error: "Invalid qortal address!" });
      return;
    }
    const isValidNewUser = await isNewUser(address);
    if (!isValidNewUser) {
      res.status(429).json({
        error: "This is already an existing account."
      });
      return;
    }
    // Prevent spam
    const existing = codes.get(email);
    if (existing) {
      const now = Date.now();
      const resendAllowedAt = existing.expiresAt - 14 * 60 * 1000; // 1m cooldown

      if (now < resendAllowedAt) {
        res.status(429).json({
          error: "Code already sent, wait before requesting again."
        });
        return;
      }
    }

    // Generate code
    const code = crypto.randomInt(100000, 999999).toString();
    const expiresAt = Date.now() + 15 * 60 * 1000; // 15 minutes

    // Build HTML (your nice template)
    const html = `
      <!doctype html>
      <html>
        <body style="font-family: sans-serif; padding: 20px;">
          <h2>Your Qortal onboarding verification code</h2>
          <p>Use this code to continue your onboarding:</p>
          <div style="font-size: 32px; font-weight: bold; letter-spacing: 6px;">
            ${code}
          </div>
          <p>This code expires in 15 minutes.</p>
        </body>
      </html>
    `;

    const text = `Your Qortal.dev verification code is: ${code}`;

    // Send MailerSend transactional email
    await sendTransactionalEmail(
      email,
      "Your Qortal onboarding verification code",
      html,
      text
    );

    // Store in memory
    codes.set(email, {
      code,
      expiresAt,
      verified: false,
      hasClaimed: false
    });

    res.json({ success: true });
  } catch (err) {
    console.error("[Onboarding] Failed to send code:", err);
    res.status(500).json({
      error: "Failed to send code. Please try again later."
    });
  }
};

const handleVerifyCode = async (
  req: Request<{}, {}, VerifyCodeRequestBody>,
  res: Response
): Promise<void> => {
  const { email, code, qortalAddress } = req.body;

  if (!email || !code) {
    res.status(400).json({ error: "Email and code are required" });
    return;
  }

  const record = codes.get(email);
  if (!record) {
    res.status(400).json({ error: "No code found. Please request a new one." });
    return;
  }

  if (Date.now() > record.expiresAt) {
    codes.delete(email);
    res.status(400).json({ error: "Code expired. Please request a new one." });
    return;
  }

  if (record.code !== code) {
    res.status(400).json({ error: "Invalid code." });
    return;
  }

  // ✅ Code is valid
  record.verified = true;
  codes.set(email, record);

  // Create a JWT valid for 2 days
  const token = jwt.sign(
    { email, qortalAddress: qortalAddress?.trim() },
    JWT_SECRET,
    {
      expiresIn: "2d"
    }
  );

  // Set cookie (valid for 7 days)
  const isProd = process.env.NODE_ENV === "production";
  res.cookie("qortal_onboarding_token", token, {
    httpOnly: true,
    secure: isProd, // only send via HTTPS in production
    sameSite: isProd ? "none" : "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  });

  res.json({ verified: true });
};

const getClientIp = (req: Request): string => {
  const xf = (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim();
  return xf || req.socket.remoteAddress || req.ip || "";
};

const handleSendQort = async (
  req: Request<{}, {}, VerifyCodeRequestBody>,
  res: Response
): Promise<void> => {
  const payload = req.onboarding;
  if (!payload) {
    res
      .status(401)
      .json({ valid: false, reason: "missing_onboarding_payload" });
    return;
  }

  const email = payload.email?.trim();
  const qortalAddress = payload.qortalAddress?.trim();
  const qortStep = +(req.query.qortStep ?? 0);

  const ip = getClientIp(req);

  if (!ip) {
    res.status(400).json({ valid: false, reason: "missing_ip" });
    return;
  }

  // 1) Check & reserve payout (email + IP anti-abuse)
  const decision = await checkAndReserveQortPayout({ email, ip, qortStep });

  if (!decision.allowed) {
    // Do NOT send QORT
    res.status(403).json({
      valid: false,
      reason: decision.reason,
      ipCount: decision.ipCount ?? undefined
    });
    return;
  }

  // 2) Try sending QORT
  try {
    const qortAmount = qortStep === 1 ? 2 : 4;
    const responseSendQort = await sendCoin({
      amount: qortAmount,
      receiver: qortalAddress
    });

    if (responseSendQort?.res?.data?.signature) {
      res.status(200).json({
        valid: true,
        email,
        exp: payload.exp,
        iat: payload.iat,
        remainingSec: Math.max(0, payload.exp - Math.floor(Date.now() / 1000)),
        tx: responseSendQort // optional: return tx info
      });
    } else {
      await rollbackQortPayout({ email, ip, qortStep });

      res.status(500).json({
        valid: false,
        reason: "send_failed"
      });
    }

    return;
  } catch (err) {
    console.error("Error sending QORT", err);

    res.status(500).json({
      valid: false,
      reason: "send_failed"
    });
    return;
  }
};

const handleCheckQortalName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const payload = req.onboarding;

    if (!payload) {
      res
        .status(401)
        .json({ error: "missing_onboarding_payload", hasName: false });
      return;
    }

    const { qortalAddress } = payload;

    if (!qortalAddress) {
      res.status(400).json({ error: "missing_qortal_address" });
      return;
    }

    const hasName = await hasQortalName(qortalAddress);

    res.status(200).json({ hasName });
  } catch (err: any) {
    console.error("[Onboarding] Failed to check Qortal name:", err);
    const error =
      err?.message === "failed_to_fetch_qortal_names"
        ? "qortal_lookup_failed"
        : "internal_error";
    const status = error === "qortal_lookup_failed" ? 502 : 500;
    res.status(status).json({ error });
  }
};

const handleGetOnboardingProfile = (req: Request, res: Response): void => {
  const payload = req.onboarding;

  if (!payload) {
    res.status(401).json({ error: "missing_onboarding_payload" });
    return;
  }

  const { email, qortalAddress } = payload;

  if (!qortalAddress) {
    res.status(400).json({ error: "missing_qortal_address" });
    return;
  }

  res.status(200).json({ email, qortalAddress });
};

const handleLogout = (_req: Request, res: Response): void => {
  const isProd = process.env.NODE_ENV === "production";
  res.clearCookie("qortal_onboarding_token", {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
    path: "/"
  });

  res.status(200).json({ success: true });
};

export {
  handleCheckQortalName,
  handleGetOnboardingProfile,
  handleLogout,
  handleSendCode,
  handleVerifyCode,
  handleSendQort
};
