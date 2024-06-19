const express = require('express');
const path = require('path');
const app = express();
const privadoRouter = require('./routes/privado'); // Caminho ajustado para routes/privado
const publicoRouter = require('./routes/publico'); // Caminho ajustado para routes/publico

// Servir arquivos estáticos da pasta 'templates' e da pasta 'Assets'
app.use(express.static(path.join(__dirname, 'templates')));
app.use(express.static(path.join(__dirname, 'Assets')));

// Usar os roteadores
app.use('/bo', privadoRouter);
app.use('/', publicoRouter);

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});