const jwt = require("jsonwebtoken");

/**
 * Sign a JWT token with the configured secret and expiration.
 */
function generateToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES
  });
}

/**
 * Verify a JWT token and return its decoded payload.
 */
function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {
  generateToken,
  verifyToken
};
