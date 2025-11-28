export const codes = new Map();

// Cleanup expired codes every 20 minutes
setInterval(() => {
  const now = Date.now();
  for (const [email, record] of codes.entries()) {
    if (record.expiresAt < now) codes.delete(email);
  }
}, 5 * 60 * 1000);
