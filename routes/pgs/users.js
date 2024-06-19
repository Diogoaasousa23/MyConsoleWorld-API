const express = require('express');
const router = express.Router();
const userController = require('../../controllers/pgs/users');

router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/create', userController.create);
router.delete('/delete/:id', userController.delete);

module.exports = router;