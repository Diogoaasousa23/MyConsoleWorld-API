const carrosRouter = require('express').Router();
const controller = require('../../controllers/pgs/games');


carrosRouter.get('/testeConn', controller.testConnection); //le todos

module.exports = carrosRouter;
