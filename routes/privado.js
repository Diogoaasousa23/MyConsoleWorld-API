const express = require('express');
const path = require('path');
const router = express.Router();

// Rota para /privado/gerirSony
router.get('/gerirSony', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'templates', 'backOffice', 'tabelaSony.html'));
});

// Rota para /privado/gerirMicrosoft
router.get('/gerirMicrosoft', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'templates', 'backOffice', 'tabelaXbox.html'));
});

// Rota para /privado/gerirNintendo
router.get('/gerirNintendo', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'templates', 'backOffice', 'tabelaNintendo.html'));
});

// Rota para /privado/gerirSteam
router.get('/gerirSteam', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'templates', 'backOffice', 'tabelaSteam.html'));
});

// Rota para /privado/gerirPCGames
router.get('/gerirPCGames', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'templates', 'backOffice', 'tabelaPCGames.html'));
});

// Rota para /privado/Dashboard
router.get('/Dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'templates', 'backOffice', 'Dashboard.html'));
});

// Rota para /privado/ManageProfile
router.get('/manageprofile', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'templates', 'backOffice', 'Manage_profile.html'));
});

const middleware = require("../middleware/auth.js");
const privadoRouter = require("express").Router();

// __dirname representa o diretório atual do arquivo
const diretorioAtual = __dirname;
// Navegar para cima um diretório
const diretorioPai = path.join(__dirname, "..");

// Define uma rota para a página HTML
privadoRouter.get("/", (req, res) => {
  // Envie o arquivo HTML como resposta para a solicitação HTTP
  res.sendFile(diretorioPai + "/templates/backOffice/Dashboard.html");
});

privadoRouter.get("/bo/dashboard", middleware.verificarToken, (req, res) => {
  // Envie o arquivo HTML como resposta para a solicitação HTTP
  res.sendFile(diretorioPai + "/templates/backOffice/Dashboard.html");
});
module.exports = router;