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

// Devolve todos os consoles
exports.getAll = async (req, res) => {
  try {
    const response = await prisma.consoles.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

// Devolve um console pelo ID
exports.getById = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const response = await prisma.consoles.findUnique({
      where: {
        id: id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
}

// Cria um novo console
exports.create = async (req, res) => {
  const { name } = req.body;
  try {
    const console = await prisma.consoles.create({
      data: {
        name: name,
      },
    });
    res.status(201).json(console);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// Atualiza um console
exports.update = async (req, res) => {
  const consoleId = Number(req.params.id);
  const { name } = req.body;
  try {
    const updatedConsole = await prisma.consoles.update({
      where: {
        id: consoleId,
      },
      data: {
        name: name,
      },
    });
    res.status(200).json(updatedConsole);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// Apaga um console pelo ID
exports.delete = async (req, res) => {
  const id = Number(req.params.id);
  try {
    await prisma.consoles.delete({
      where: {
        id: id,
      },
    });
    res.status(200).send("Console deleted successfully.");
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}
