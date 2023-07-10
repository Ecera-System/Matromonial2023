const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization;

  // Check if a token exists
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, 'new_token');
    req.decoded = decoded;
    next();
    

  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
