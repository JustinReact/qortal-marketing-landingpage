import rateLimit from "express-rate-limit";

// Rate limiter for the publish endpoint
// This is resource-intensive: building, zipping, and publishing
export const publishLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // Limit each IP to 5 requests per hour
  message: {
    success: false,
    error:
      "Too many publish requests from this IP. You have reached the limit of 5 publishes per hour. Please try again later."
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  // Use a more sophisticated key generator if behind a proxy
  keyGenerator: (req) => {
    // Try to get real IP from proxy headers, fallback to socket IP
    return (
      req.ip ||
      (req.headers["x-forwarded-for"] as string) ||
      (req.headers["x-real-ip"] as string) ||
      req.socket.remoteAddress ||
      "unknown"
    );
  },
  // Skip successful requests from rate limit counting (optional)
  skipSuccessfulRequests: false,
  // Skip failed requests from rate limit counting (optional)
  skipFailedRequests: false
});

// More lenient rate limiter for general API endpoints
export const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    success: false,
    error: "Too many requests from this IP, please try again later."
  },
  standardHeaders: true,
  legacyHeaders: false
});
