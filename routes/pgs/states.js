const express = require('express');
const router = express.Router();
const stateController = require('../../controllers/pgs/states');

router.get('/', stateController.getAll);
router.get('/:id', stateController.getById);
router.post('/create', stateController.create);
router.delete('/delete/:id', stateController.delete);

module.exports = router;