const carrosRouter = require('express').Router();
const controller = require('../../controllers/pgs/carros');


carrosRouter.get('/testeConn', controller.testConnection); //le todos

module.exports = carrosRouter;
