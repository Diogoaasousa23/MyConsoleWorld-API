const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../../data/local/consoles.json');

// Devolve todos os consoles
exports.getAll = (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    res.status(200).json(data.consoles);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

// Devolve um console pelo ID
exports.getById = (req, res) => {
  const id = req.params.id;
  try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    const console = data.consoles.find(console => console.id === id);
    if (!console) {
      res.status(404).json({ msg: 'Console não encontrado' });
      return;
    }
    res.status(200).json(console);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

// Cria um novo console
exports.create = (req, res) => {
  const newConsole = req.body;
  try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    data.consoles.push(newConsole);
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    res.status(201).json(newConsole);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// Atualiza um console
exports.update = (req, res) => {
  const updatedConsole = req.body;
  try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    const index = data.consoles.findIndex(console => console.id === updatedConsole.id);
    if (index === -1) {
      res.status(404).json({ msg: 'Console não encontrado' });
      return;
    }
    data.consoles[index] = updatedConsole;
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    res.status(200).json(updatedConsole);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// Apaga um console pelo ID
exports.delete = (req, res) => {
  const id = req.params.id;
  try {
    let data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    const index = data.consoles.findIndex(console => console.id === id);
    if (index === -1) {
      res.status(404).json({ msg: 'Console não encontrado' });
      return;
    }
    const deletedConsole = data.consoles.splice(index, 1)[0];
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    res.status(200).json(deletedConsole);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

module.exports = exports;
