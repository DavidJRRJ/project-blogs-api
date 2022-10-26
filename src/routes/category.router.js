const express = require('express');
const categoryController = require('../controllers/category.controller');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

router.post('/', verifyToken, categoryController.createCategory);

module.exports = router;