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

// Devolve todos os usuários
exports.getAll = async (req, res) => {
  try {
    const response = await prisma.users.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

// Devolve um usuário pelo ID
exports.getById = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const response = await prisma.users.findUnique({
      where: {
        id: id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
}

// Cria um novo usuário
exports.create = async (req, res) => {
  const { name, email, password, isAdmin } = req.body;
  try {
    const user = await prisma.users.create({
      data: {
        name: name,
        email: email,
        password: password,
        isAdmin: isAdmin,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// Atualiza um usuário
exports.update = async (req, res) => {
  const userId = Number(req.params.id);
  const { name, email, password, isAdmin } = req.body;
  try {
    const updatedUser = await prisma.users.update({
      where: {
        id: userId,
      },
      data: {
        name: name,
        email: email,
        password: password,
        isAdmin: isAdmin,
      },
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// Apaga um usuário pelo ID
exports.delete = async (req, res) => {
  const id = Number(req.params.id);
  try {
    await prisma.users.delete({
      where: {
        id: id,
      },
    });
    res.status(200).send("User deleted successfully.");
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}
