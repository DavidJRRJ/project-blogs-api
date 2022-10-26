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

const getCategory = async () => {
  const categories = await Category.findAll();

  return categories;
};

module.exports = {
  validateCategory,
  createCategory,
  getCategory,
};
