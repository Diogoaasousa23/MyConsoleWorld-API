const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../../data/local/users.json');

// Devolve todos os usuários
exports.getAll = (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    res.status(200).json(data.users);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

// Devolve um usuário pelo ID
exports.getById = (req, res) => {
  const id = req.params.id;
  try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    const user = data.users.find(user => user.id === id);
    if (!user) {
      res.status(404).json({ msg: 'Usuário não encontrado' });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

// Cria um novo usuário
exports.create = (req, res) => {
  const newUser = req.body;
  try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    data.users.push(newUser);
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// Atualiza um usuário
exports.update = (req, res) => {
  const updatedUser = req.body;
  try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    const index = data.users.findIndex(user => user.id === updatedUser.id);
    if (index === -1) {
      res.status(404).json({ msg: 'Usuário não encontrado' });
      return;
    }
    data.users[index] = updatedUser;
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// Apaga um usuário pelo ID
exports.delete = (req, res) => {
  const id = req.params.id;
  try {
    let data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    const index = data.users.findIndex(user => user.id === id);
    if (index === -1) {
      res.status(404).json({ msg: 'Usuário não encontrado' });
      return;
    }
    const deletedUser = data.users.splice(index, 1)[0];
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}
