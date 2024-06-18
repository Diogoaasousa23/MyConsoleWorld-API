const express = require('express');
const router = express.Router();

// Rota para a brand "Nike"
router.get('/nike', (req, res) => {
  res.send('Bem-vindo à página da Nike!');
});

// Rota para a brand "Adidas"
router.get('/adidas', (req, res) => {
  res.send('Bem-vindo à página da Adidas!');
});

// Rota para a brand "Puma"
router.get('/puma', (req, res) => {
  res.send('Bem-vindo à página da Puma!');
});

// Rota para qualquer outra brand
router.get('/:brand', (req, res) => {
  const brand = req.params.brand;
  res.send(`Bem-vindo à página da brand: ${brand}`);
});

module.exports = router;