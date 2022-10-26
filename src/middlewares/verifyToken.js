const jwtUtil = require('../utils/jwt.util');

const verifyToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new Error('Token not found');
    }
    const info = jwtUtil.verifyToken(authorization);
    req.info = info;

    next();
  } catch (e) {
    return res.status(401).json({ message: e.message });
  }
};

module.exports = verifyToken;