const express = require('express');
const userController = require('../controllers/user.controller');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

router.post('/', userController.createUser);
router.get('/:id', verifyToken, userController.getIdUser);
router.get('/', verifyToken, userController.getAllUser);

module.exports = router;