const express = require('express');
const path = require('path');
const privadoRouter = express.Router();

// Define uma rota para a página HTML
privadoRouter.get('/gerirSony', (req, res) => {
  // Envie o arquivo HTML como resposta para a solicitação HTTP
  res.sendFile(path.join(__dirname, '..', 'templates', 'backOffice', 'tabelaCarros.html'));
});

privadoRouter.get('/Dashboard', (req, res) => {
  // Envie o arquivo HTML como resposta para a solicitação HTTP
  res.sendFile(path.join(__dirname, '..', 'templates', 'backOffice', 'Dashboard.html'));
});

module.exports = privadoRouter;