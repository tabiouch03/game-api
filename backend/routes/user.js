const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

router.delete('/:id', userController.deleteUser);
router.put('/:id', userController.updateUserById);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.get('/', userController.getUser);

module.exports = router;