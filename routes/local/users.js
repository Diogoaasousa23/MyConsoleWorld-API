const express = require('express');
const router = express.Router();
const userController = require('../../controllers/local/users');

router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/create', userController.create);
router.put('/update/:id', userController.update);
router.delete('/delete/:id', userController.delete);

module.exports = router;