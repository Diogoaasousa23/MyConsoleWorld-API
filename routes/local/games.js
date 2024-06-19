const express = require('express');
const router = express.Router();
const gameController = require('../../controllers/local/games');

router.get('/', gameController.getAll);
router.get('/:id', gameController.getById);
router.post('/create', gameController.create);
router.put('/update/:id', gameController.update);
router.delete('/delete/:id', gameController.delete);

module.exports = router;