const express = require('express');
const path = require('path');
const publicoRouter = express.Router();

// Rota para /index
publicoRouter.get('/index', (req, res) => {
  // Envie o arquivo HTML como resposta para a solicitação HTTP
  res.sendFile(path.join(__dirname, '..', 'templates', 'frontEnd', 'index.html'));
});

module.exports = publicoRouter;