import express from "express";
import {
  handleCheckQortalName,
  handleGetOnboardingProfile,
  handleLogout,
  handleSendCode,
  handleSendQort,
  handleVerifyCode
} from "../controllers/onBoardingController";
import { requireOnboardingAuth } from "../middleware/authOnBoardingMiddleware";
const router = express.Router();

router.post("/sendcode", handleSendCode);

router.post("/verifyCode", handleVerifyCode);

router.get(
  "/hasQortalName",
  requireOnboardingAuth,
  handleCheckQortalName
);

router.get(
  "/session",
  requireOnboardingAuth,
  handleGetOnboardingProfile
);

router.post("/logout", handleLogout);

router.get("/sendQort", requireOnboardingAuth, handleSendQort);

export default router;
