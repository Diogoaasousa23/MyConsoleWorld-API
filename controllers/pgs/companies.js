const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Testa a ligação
exports.testConnection = async (req, res) => {
  try {
    await prisma.$connect();
    res.send('Connection to PostgreSQL successful!');
  } catch (error) {
    res.status(500).send(`Error trying to connect to PostgreSQL: ${error.message}`);
  } finally {
    await prisma.$disconnect();
  }
}

// Devolve todas as empresas
exports.getAll = async (req, res) => {
  try {
    const response = await prisma.companies.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

// Devolve uma empresa pelo ID
exports.getById = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const response = await prisma.companies.findUnique({
      where: {
        id: id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
}

// Cria uma nova empresa
exports.create = async (req, res) => {
  const { name } = req.body;
  try {
    const company = await prisma.companies.create({
      data: {
        name: name,
      },
    });
    res.status(201).json(company);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// Atualiza uma empresa
exports.update = async (req, res) => {
  const companyId = Number(req.params.id);
  const { name } = req.body;
  try {
    const updatedCompany = await prisma.companies.update({
      where: {
        id: companyId,
      },
      data: {
        name: name,
      },
    });
    res.status(200).json(updatedCompany);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// Apaga uma empresa pelo ID
exports.delete = async (req, res) => {
  const id = Number(req.params.id);
  try {
    await prisma.companies.delete({
      where: {
        id: id,
      },
    });
    res.status(200).send("Company deleted successfully.");
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}
