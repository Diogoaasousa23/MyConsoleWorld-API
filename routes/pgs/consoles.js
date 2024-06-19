const express = require('express');
const router = express.Router();
const consoleController = require('../../controllers/pgs/consoles');

router.get('/', consoleController.getAll);
router.get('/:id', consoleController.getById);
router.post('/create', consoleController.create);
router.delete('/delete/:id', consoleController.delete);

module.exports = router;