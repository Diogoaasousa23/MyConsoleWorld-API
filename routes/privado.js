const privadoRouter = require('express').Router();


// Define uma rota para a página HTML
privadoRouter.get('/gerirGames', (req, res) => {
    // Envie o arquivo HTML como resposta para a solicitação HTTP
    res.sendFile('C:/Users/diogo/Documents/ERSC/2ºano/PW/html/MyConsoleWorld-API/templates/backOffice/tabelaCarros.html');
  });


module.exports = privadoRouter;