const express = require('express');
const postController = require('../controllers/post.controller');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

router.get('/:id', verifyToken, postController.postGetById);
router.get('/', verifyToken, postController.postGetAll);

module.exports = router;