const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  try {
    categoryService.validateCategory(req.body);
  const category = await categoryService.createCategory(req.body);

  return res.status(201).json(category);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

module.exports = {
  createCategory,
};