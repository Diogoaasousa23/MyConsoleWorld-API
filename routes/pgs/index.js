const router = require('express').Router();
const carrosRouter = require('./carros');

router.use('/carros', carrosRouter);


module.exports = router;