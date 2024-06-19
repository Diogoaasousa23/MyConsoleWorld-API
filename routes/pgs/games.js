const express = require('express');
const router = express.Router();
const gameController = require('../../controllers/pgs/games');

router.get('/', gameController.getAll);
router.get('/:id', gameController.getById);
router.post('/create', gameController.create);
router.delete('/delete/:id', gameController.delete);

module.exports = router;