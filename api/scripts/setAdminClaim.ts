// setAdminClaim.ts
import admin from 'firebase-admin';
import * as dotenv from 'dotenv';
dotenv.config();

const serviceAccount = require('../qortal-3425d-firebase-adminsdk-fbsvc-58d84ec8c9.json');

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

const targetEmail = 'mihailkirkov04@gmail.com';

async function setAdminClaim() {
    try {
        const user = await admin.auth().getUserByEmail(targetEmail);

        await admin.auth().setCustomUserClaims(user.uid, { admin: true });

        console.log(`✅ Successfully set admin claim for ${targetEmail}`);
        process.exit(0);
    } catch (error) {
        console.error('❌ Failed to set admin claim:', error);
        process.exit(1);
    }
}

setAdminClaim();
