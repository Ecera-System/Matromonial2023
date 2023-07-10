require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const adminAuthMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: "Unauthorized access!" });

    jwt.verify(token, 'your_secret_key', async (err, decoded) => {
      if (err) return res.status(403).json({ message: "Invalid token!", });

      const user = await User.findOne({ _id: decoded.userId });
      if (!user) return res.status(401).json({ message: "Unauthorized access!" });
      if (!user.isAdmin) return res.status(401).json({ message: "You are not admin!" });
      req.decoded = decoded;
      next();
    })
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}
//   const adminAuthMiddleware = async (req, res, next) => {
//   try {
//     const token = req.header('Authorization').replace('Bearer ', '');
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const admin = await Admin.findOne({
//       _id: decoded._id,
//       'tokens.token': token,
//     });

//     if (!admin) {
//       throw new Error();
//     }

//     req.token = token;
//     req.admin = admin;
//     next();
//   } catch (error) {
//     res.status(401).send({ error: 'Unauthorized access' });
//   }
// };

module.exports = adminAuthMiddleware;
