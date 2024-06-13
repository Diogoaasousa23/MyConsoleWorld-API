const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Testa a ligação
exports.testConnection = async (req, res) => {
  try {
    await prisma.$connect();
    res.send("Ligação bem-sucedida com o PostgreSQL!");
  } catch (error) {
    res.send("Erro ao conectar ao PostgreSQL:", error);
  } finally {
    await prisma.$disconnect();
  }
};

// Devolve todos os jogos
exports.getAll = async (req, res) => {
  try {
    // Le toda a tabela
    const response = await prisma.Games.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Devolve um jogo indicado por um id
exports.getById = async (req, res) => {
  // Apanha o id enviado
  const id = req.params.id * 1;
  try {
    // Procura o jogo com o id
    const response = await prisma.Games.findUnique({
      where: {
        id: id,
      },
    });
    // Devolve o jogo
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// Criar um jogo
exports.create = async (req, res) => {
  // Apanhar os dados enviados
  const { name, date, console, state, rating } = req.body;
  try {
    // Criar um novo jogo
    const game = await prisma.Games.create({
      data: {
        name: name,
        date: date,
        console: console,
        state: state,
        rating: rating,
      },
    });
    // Devolve o jogo criado
    res.status(201).json(game);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// Atualizar um jogo
exports.update = async (req, res) => {
  const { id, name, date, console, state, rating } = req.body;

  try {
    // Procurar o jogo com id e atualizar os dados
    const game = await prisma.Games.update({
      where: {
        id: id * 1,
      },
      data: {
        name: name,
        date: date,
        console: console,
        state: state,
        rating: rating,
      },
    });
    // Devolve o jogo atualizado
    res.status(200).json(game);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// Apagar o jogo com id passado
exports.delete = async (req, res) => {
  // Le o id do jogo
  const id = req.params.id;
  try {
    // Apagar o jogo
    await prisma.Games.delete({
      where: {
        id: id * 1,
      },
    });
    // Apenas retorna ok
    res.status(200).send("ok");
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
