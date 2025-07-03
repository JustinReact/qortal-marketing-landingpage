import { Request, Response, NextFunction } from 'express';
import admin from 'firebase-admin';

const API_SECRET_KEY = process.env.API_SECRET_KEY;

export const authenticateWithToken = (req: Request, res: Response, next: NextFunction): void => {
    // Extract token from the Authorization header
    const token = req.headers['authorization']?.split('Bearer ')[1];

    // Check if token is provided
    if (!token) {
        res.status(401).json({ error: 'Authorization token is missing' });
        return;  // Stop execution here
    }

    // Compare the token with the one in environment variables
    if (token !== API_SECRET_KEY) {
        res.status(403).json({ error: 'Forbidden: Invalid API key' });
        return; 
    }

    // Token is valid, proceed to the next middleware or handler
    next();
};


export const authenticateFirebaseToken = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
  const idToken =
    req.cookies?.firebase_id_token ||
    (req.headers.authorization?.startsWith('Bearer ')
      ? req.headers.authorization.split('Bearer ')[1]
      : null);

  if (!idToken) {
    return redirectToLogin(res);
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    if (!decodedToken.admin) {
        res.status(403).send('Forbidden: Admins only');
        return 
    }

    (req as any).user = decodedToken;
    next();
  } catch (error) {
    console.error('Error verifying Firebase ID token:', error);
    return redirectToLogin(res);
  }
};

function redirectToLogin(res: Response) {
  res.redirect('/api/admin/login');
}
