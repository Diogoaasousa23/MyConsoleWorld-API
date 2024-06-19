const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../../data/local/states.json');

// Devolve todos os estados
exports.getAll = (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    res.status(200).json(data.states);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

// Devolve um estado pelo ID
exports.getById = (req, res) => {
  const id = req.params.id;
  try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    const state = data.states.find(state => state.id === id);
    if (!state) {
      res.status(404).json({ msg: 'Estado não encontrado' });
      return;
    }
    res.status(200).json(state);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

// Cria um novo estado
exports.create = (req, res) => {
  const newState = req.body;
  try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    data.states.push(newState);
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    res.status(201).json(newState);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// Atualiza um estado
exports.update = (req, res) => {
  const updatedState = req.body;
  try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    const index = data.states.findIndex(state => state.id === updatedState.id);
    if (index === -1) {
      res.status(404).json({ msg: 'Estado não encontrado' });
      return;
    }
    data.states[index] = updatedState;
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    res.status(200).json(updatedState);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// Apaga um estado pelo ID
exports.delete = (req, res) => {
  const id = req.params.id;
  try {
    let data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    const index = data.states.findIndex(state => state.id === id);
    if (index === -1) {
      res.status(404).json({ msg: 'Estado não encontrado' });
      return;
    }
    const deletedState = data.states.splice(index, 1)[0];
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    res.status(200).json(deletedState);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}
