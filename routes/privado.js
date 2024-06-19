const express = require('express');
const path = require('path');
const router = express.Router();

// Rota para /privado/gerirSony
router.get('/gerirSony', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'templates', 'backOffice', 'tabelaCarros.html'));
});

// Rota para /privado/Dashboard
router.get('/Dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'templates', 'backOffice', 'Dashboard.html'));
});

module.exports = router;