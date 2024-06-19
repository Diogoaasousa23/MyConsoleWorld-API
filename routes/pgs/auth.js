const authRouter = require("express").Router();
const controller = require("../../controllers/pgs/auth");

authRouter.post("/signin", controller.signin);
authRouter.post("/signup", controller.signup);
authRouter.post("/letoken", controller.readToken);

exports.readToken = async (req, res) => {
  try {
    const { token } = req.body;
    authenticateUtil
      .certifyAccessToken(token)
      .then((decode) => {
        res.status(200).json(decode);
        // Aqui pode ler os dados decodificados do token
        // Faça o que quiser com os dados decodificados, como salvá-los em variáveis ou usar em outras operações
      })
      .catch((err) => {
        res.status(401).json(err);
        //console.error('Erro ao verificar o token:', err);
      });
  } catch (error) {
    res.status(401).json({ msg: error.message });
  }
};

module.exports = authRouter;
