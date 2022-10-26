const Joi = require('joi');
const { Category } = require('../models');

const validateCategory = (params) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  const { value, error } = schema.validate(params);
  if (error) throw new Error('"name" is required');

  return value;
};

const createCategory = async (reqBody) => {
  const category = await Category.create(reqBody);

  return category;
};

module.exports = {
  validateCategory,
  createCategory,
};
