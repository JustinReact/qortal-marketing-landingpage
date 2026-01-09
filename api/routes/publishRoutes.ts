import express from "express";
import { publishApp } from "../controllers/publishController";
import { publishLimiter } from "../middleware/rateLimiter";

const router = express.Router();

// POST /api/publish - with rate limiting (5 requests per hour per IP)
router.post("/publish", publishLimiter, publishApp);

export default router;
