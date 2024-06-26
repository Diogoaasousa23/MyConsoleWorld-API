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

// Devolve todos os jogos
exports.getAll = async (req, res) => {
  try {
    const response = await prisma.games.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

// Devolve um jogo pelo ID
exports.getById = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const response = await prisma.games.findUnique({
      where: {
        id: id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
}

// Cria um novo jogo
exports.create = async (req, res) => {
  const { name, date, console, state, rating } = req.body;
  try {
    const game = await prisma.games.create({
      data: {
        name: name,
        date: new Date(date),
        console: console,
        state: state,
        rating: rating,
      },
    });
    res.status(201).json(game);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// Atualiza um jogo
exports.update = async (req, res) => {
  const gameId = Number(req.params.id);
  const { name, date, console, state, rating } = req.body;
  try {
    const updatedGame = await prisma.games.update({
      where: {
        id: gameId,
      },
      data: {
        name: name,
        date: new Date(date),
        console: console,
        state: state,
        rating: rating,
      },
    });
    res.status(200).json(updatedGame);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// Apaga um jogo pelo ID
exports.delete = async (req, res) => {
  const id = Number(req.params.id);
  try {
    await prisma.games.delete({
      where: {
        id: id,
      },
    });
    res.status(200).send("Game deleted successfully.");
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}
