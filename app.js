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

// Importar os roteadores
const games = require('./routes/local/games');
const users = require('./routes/local/users');
const states = require('./routes/local/states');
const consoles = require('./routes/local/consoles');
const companies = require('./routes/local/companies');

// Registrar os roteadores
app.use('/api/games', games);
app.use('/api/users', users);
app.use('/api/states', states);
app.use('/api/consoles', consoles);
app.use('/api/companies', companies);

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});