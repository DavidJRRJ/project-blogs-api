const Joi = require('joi');
const jwtUtil = require('../utils/jwt.util');
const { User } = require('../models');

const validateUser = (params) => {
  const schema = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
  });

  const { value, error } = schema.validate(params);

  if (error) {
    const e = new Error(error.message);
    e.status = 400;
    throw e;
  }

  return value;
};

const createUser = async (reqBody) => {
  const user = await User.findOne({ where: { email: reqBody.email } });

  if (user !== null) {
    const e = new Error('User already registered');
    e.status = 409;
    throw e;
  }

  await User.create(reqBody);

  return jwtUtil.createToken({ ...reqBody, password: '_' });
};

const getAllUser = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return users;
};

module.exports = {
  validateUser,
  createUser,
  getAllUser,
};