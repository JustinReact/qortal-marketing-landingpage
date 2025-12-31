import express from 'express';
import { publishApp } from '../controllers/publishController';

const router = express.Router();

// POST /api/publish
router.post('/publish', publishApp);

export default router;

