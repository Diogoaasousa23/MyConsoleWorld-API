const express = require('express');
const app = express();
const port = 3000;

// Importar o arquivo de rotas das brands
const brandsRouter = require('./routes/brands');

// Middleware para registrar todas as requisições (opcional, mas útil para depuração)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Rota principal
app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor de rotas de brands!');
});

// Usar o router das brands
app.use('/brands', brandsRouter);

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});