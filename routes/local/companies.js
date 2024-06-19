const express = require('express');
const router = express.Router();
const companyController = require('../../controllers/local/companies');

router.get('/', companyController.getAll);
router.get('/:id', companyController.getById);
router.post('/create', companyController.create);
router.put('/update/:id', companyController.update);
router.delete('/delete/:id', companyController.delete);

module.exports = router;
