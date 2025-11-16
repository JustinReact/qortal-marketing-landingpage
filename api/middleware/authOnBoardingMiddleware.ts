import { Request, Response, NextFunction, RequestHandler } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";

// augment Request to carry the payload
declare module "express-serve-static-core" {
  interface Request {
    onboarding?: {
      email: string;
      iat: number;
      exp: number;
      qortalAddress: string;
    };
  }
}

// Generic middleware: no route-specific generics here
export const requireOnboardingAuth: RequestHandler = (req, res, next) => {
  const cookieToken = (req.cookies?.qortal_onboarding_token as string) || null;
  const auth = req.headers.authorization;
  const headerToken = auth?.startsWith("Bearer ") ? auth.slice(7) : null;
  const token = cookieToken ?? headerToken;

  if (!token) {
    res.status(401).json({ valid: false, reason: "missing_token" });
    return; // 👈 ensure void return
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      email: string;
      iat: number;
      exp: number;
      qortalAddress: string;
    };

    req.onboarding = decoded;
    next();
  } catch (err: any) {
    if (err?.name === "TokenExpiredError") {
      res.status(401).json({ valid: false, reason: "expired" });
      return;
    }
    res.status(401).json({ valid: false, reason: "invalid" });
    return;
  }
};
