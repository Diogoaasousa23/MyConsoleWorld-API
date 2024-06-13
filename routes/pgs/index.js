const router = require('express').Router();
const carrosRouter = require('./games');

router.use('/games', carrosRouter);


module.exports = router;