const express = require('express');
const userController = require('../controllers/user.controller');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', verifyToken, userController.getAllUser);

module.exports = router;