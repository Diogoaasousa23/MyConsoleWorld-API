const privadoRouter = require('express').Router();


// Define uma rota para a página HTML
privadoRouter.get('/gerirCarros', (req, res) => {
    // Envie o arquivo HTML como resposta para a solicitação HTTP
    res.sendFile('C:/Users/diogo/Documents/ERSC/2ºano/PW/html/AW-P-26118/templates/backOffice/tabelaCarros.html');
  });


module.exports = privadoRouter;