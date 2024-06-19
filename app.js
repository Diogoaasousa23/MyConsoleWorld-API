const express = require('express');
const path = require('path');
const app = express();
const privadoRouter = require('./routers/privadoRouter');

// Servir arquivos estáticos da pasta templates
app.use(express.static(path.join(__dirname, 'templates')));

// Usar o router
app.use('/privado', privadoRouter);

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});