const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../../data/local/companies.json');

// Devolve todas as empresas
exports.getAll = (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    res.status(200).json(data.companies);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

// Devolve uma empresa pelo ID
exports.getById = (req, res) => {
  const id = req.params.id;
  try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    const company = data.companies.find(company => company.id === id);
    if (!company) {
      res.status(404).json({ msg: 'Empresa não encontrada' });
      return;
    }
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

// Cria uma nova empresa
exports.create = (req, res) => {
  const newCompany = req.body;
  try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    data.companies.push(newCompany);
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// Atualiza uma empresa
exports.update = (req, res) => {
  const updatedCompany = req.body;
  try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    const index = data.companies.findIndex(company => company.id === updatedCompany.id);
    if (index === -1) {
      res.status(404).json({ msg: 'Empresa não encontrada' });
      return;
    }
    data.companies[index] = updatedCompany;
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    res.status(200).json(updatedCompany);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// Apaga uma empresa pelo ID
exports.delete = (req, res) => {
  const id = req.params.id;
  try {
    let data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    const index = data.companies.findIndex(company => company.id === id);
    if (index === -1) {
      res.status(404).json({ msg: 'Empresa não encontrada' });
      return;
    }
    const deletedCompany = data.companies.splice(index, 1)[0];
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    res.status(200).json(deletedCompany);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

module.exports = exports;
