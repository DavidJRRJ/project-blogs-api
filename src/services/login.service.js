const Joi = require('joi');
const jwtUtil = require('../utils/jwt.util');

const { User } = require('../models');

const validateBody = (params) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const { error, value } = schema.validate(params);

  if (error) throw new Error('Some required fields are missing');

  return value;
};

const validateLogin = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    throw new Error('Invalid fields');
  }

  const { password: _, ...userWithoutPass } = user.dataValues;

  const token = jwtUtil.createToken(userWithoutPass);

  return token;
};

module.exports = {
  validateBody,
  validateLogin,
};