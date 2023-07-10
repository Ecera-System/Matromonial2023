const jwt = require('jsonwebtoken');
dotenv.config();
const { JWT_SECRET } = require('../config');

const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '24h' });
};

module.exports = generateToken;
