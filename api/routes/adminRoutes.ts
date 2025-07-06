import { Router } from 'express';
import { authenticateFirebaseToken, authenticateWithToken } from '../middleware/authMiddleware';
import fs from 'fs';
import { handleGetAllBlurbs } from '../controllers/blurbController';

const router = Router();
router.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
});

// Public login page route (no auth)
router.get('/login', (req, res) => {
    const config = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
    };

    const html = fs.readFileSync('dist/views/admin-login/admin-login.html', 'utf8');
    const injected = html.replace('{{FIREBASE_CONFIG}}', JSON.stringify(config));
    res.send(injected);
});

// Logout
router.post('/logout', (req, res) => {
    res.clearCookie('firebase_id_token', {
        path: '/', 
        secure: true, 
        sameSite: 'strict',
        httpOnly: true // add this for extra security, even if you don’t set it in cookie on login
    });
    res.status(200).send('Logged out');
});


// 🔒 Firebase-protected admin area
router.get('/', authenticateFirebaseToken, (req, res) => {
    const config = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
    };

    const html = fs.readFileSync('dist/views/admin/admin.html', 'utf8');
    // const injected = html.replace('{{FIREBASE_CONFIG}}', JSON.stringify(config));
    const injected = html.replace('{{FIREBASE_CONFIG}}', JSON.stringify(config).replace(/</g, '\\u003c'));

    res.send(injected);
});

// Add other secure admin routes below here (blurbs, moderation, etc)
router.get('/blurbs', authenticateWithToken, handleGetAllBlurbs);

export default router;
