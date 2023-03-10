require('dotenv');
const jwt = require('jsonwebtoken');

const createToken = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET, {
    expiresIn: '15d',
    algorithm: 'HS256',
  });

  return token;
};

const verifyToken = (token) => {
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    return data;
  } catch (e) {
    throw new Error('Expired or invalid token');
  }
};

module.exports = {
  createToken,
  verifyToken,
};