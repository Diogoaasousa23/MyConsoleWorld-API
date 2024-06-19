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

// Devolve todos os estados
exports.getAll = async (req, res) => {
  try {
    const response = await prisma.states.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

// Devolve um estado pelo ID
exports.getById = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const response = await prisma.states.findUnique({
      where: {
        id: id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
}

// Cria um novo estado
exports.create = async (req, res) => {
  const { name } = req.body;
  try {
    const state = await prisma.states.create({
      data: {
        name: name,
      },
    });
    res.status(201).json(state);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// Atualiza um estado
exports.update = async (req, res) => {
  const stateId = Number(req.params.id);
  const { name } = req.body;
  try {
    const updatedState = await prisma.states.update({
      where: {
        id: stateId,
      },
      data: {
        name: name,
      },
    });
    res.status(200).json(updatedState);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// Apaga um estado pelo ID
exports.delete = async (req, res) => {
  const id = Number(req.params.id);
  try {
    await prisma.states.delete({
      where: {
        id: id,
      },
    });
    res.status(200).send("State deleted successfully.");
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}
