const express = require('express');
const router = express.Router();
const consoleController = require('../../controllers/local/consoles');

router.get('/', consoleController.getAll);
router.get('/:id', consoleController.getById);
router.post('/create', consoleController.create);
router.put('/update/:id', consoleController.update);
router.delete('/delete/:id', consoleController.delete);

module.exports = router;
