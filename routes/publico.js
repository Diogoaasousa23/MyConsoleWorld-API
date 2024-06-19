const express = require('express');
const path = require('path');
const publicoRouter = express.Router();

// Rota para /index
publicoRouter.get('/index', (req, res) => {
  // Envie o arquivo HTML como resposta para a solicitação HTTP
  res.sendFile(path.join(__dirname, '..', 'templates', 'frontEnd', 'index.html'));
});

publicoRouter.get('/login', (req, res) => {
  // Envie o arquivo HTML como resposta para a solicitação HTTP
  res.sendFile(path.join(__dirname, '..', 'templates', 'frontEnd', 'Login.html'));
});

publicoRouter.get('/signup', (req, res) => {
  // Envie o arquivo HTML como resposta para a solicitação HTTP
  res.sendFile(path.join(__dirname, '..', 'templates', 'frontEnd', 'Sign.html'));
});

publicoRouter.get('/recoverpassword', (req, res) => {
  // Envie o arquivo HTML como resposta para a solicitação HTTP
  res.sendFile(path.join(__dirname, '..', 'templates', 'frontEnd', 'Pass.html'));
});

publicoRouter.get('/privacypolicy', (req, res) => {
  // Envie o arquivo HTML como resposta para a solicitação HTTP
  res.sendFile(path.join(__dirname, '..', 'templates', 'frontEnd', 'privacy-policy.html'));
});

publicoRouter.get('/termsofservice', (req, res) => {
  // Envie o arquivo HTML como resposta para a solicitação HTTP
  res.sendFile(path.join(__dirname, '..', 'templates', 'frontEnd', 'terms-of-service.html'));
});


module.exports = publicoRouter;