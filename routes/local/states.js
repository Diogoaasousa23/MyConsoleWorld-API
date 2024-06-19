const express = require('express');
const router = express.Router();
const stateController = require('../../controllers/local/states');

router.get('/', stateController.getAll);
router.get('/:id', stateController.getById);
router.post('/create', stateController.create);
router.put('/update/:id', stateController.update);
router.delete('/delete/:id', stateController.delete);

module.exports = router;
