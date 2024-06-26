const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../../data/local/games.json');

// Devolve todos os jogos
exports.getAll = (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    res.status(200).json(data.games);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

// Devolve um jogo pelo ID
exports.getById = (req, res) => {
  const id = req.params.id;
  try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    const game = data.games.find(game => game.id === id);
    if (!game) {
      res.status(404).json({ msg: 'Jogo não encontrado' });
      return;
    }
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

// Cria um novo jogo
exports.create = (req, res) => {
  const newGame = req.body;
  try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    data.games.push(newGame);
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    res.status(201).json(newGame);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// Atualiza um jogo
exports.update = (req, res) => {
  const updatedGame = req.body;
  try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    const index = data.games.findIndex(game => game.id === updatedGame.id);
    if (index === -1) {
      res.status(404).json({ msg: 'Jogo não encontrado' });
      return;
    }
    data.games[index] = updatedGame;
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    res.status(200).json(updatedGame);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// Apaga um jogo pelo ID
exports.delete = (req, res) => {
  const id = req.params.id;
  try {
    let data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    const index = data.games.findIndex(game => game.id === id);
    if (index === -1) {
      res.status(404).json({ msg: 'Jogo não encontrado' });
      return;
    }
    const deletedGame = data.games.splice(index, 1)[0];
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    res.status(200).json(deletedGame);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}
