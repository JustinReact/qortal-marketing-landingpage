// routes/adminRoutes.ts
import { Router } from 'express';
import path from 'path';
import { authenticateFirebaseToken, authenticateWithToken } from '../middleware/authMiddleware';
import fs from 'fs';
import { handleGetAllBlurbs } from '../controllers/blurbController';

const router = Router();

// Public login page route (no auth)
router.get('/login', (req, res) => {
    const config = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        // ... more fields as needed
    };

    const html = fs.readFileSync('dist/views/admin-login/admin-login.html', 'utf8');
    const injected = html.replace('{{FIREBASE_CONFIG}}', JSON.stringify(config));
    res.send(injected);
});

// Logout
router.post('/logout', (req, res) => {
    res.clearCookie('firebase_id_token');
    res.redirect('/api/admin/login');
});


// 🔒 Firebase-protected admin area
router.get('/', authenticateFirebaseToken, (req, res) => {
    res.sendFile(path.join(process.cwd(), 'dist', 'views', 'admin/admin.html'));
});


// Add other secure admin routes below here (blurbs, moderation, etc)
router.get('/blurbs', authenticateWithToken, handleGetAllBlurbs);

export default router;
