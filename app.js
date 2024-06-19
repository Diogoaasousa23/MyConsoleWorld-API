const express = require('express');
const path = require('path');
const app = express();
const privadoRouter = require('./routes/privado.js'); // Caminho ajustado para routes/privado
const publicoRouter = require('./routes/publico.js');

// Servir arquivos estáticos da pasta templates
app.use(express.static(path.join(__dirname, 'templates')));
app.use(express.static(path.join(__dirname, 'Assets')));

// Usar o router
app.use('/privado.js', privadoRouter);
app.use('/publico.js', publicoRouter);


const PORT = process.env.PORT || 4242;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
