const authenticateUtil = require("../utils/authenticate");

module.exports.verificarToken = async (req, res, next) => {
  const accessToken = req.headers["authorization"]; // req.headers['x-access-token'];

  if (!accessToken) {
    return res.status(401).send("unauthorized");
  }

  try {
    const bearer = accessToken.split(" ");
    const bearerToken = bearer[1];
    //return res.status(200).json({ token: bearerToken });
    const result = await authenticateUtil.certifyAccessToken(bearerToken);
    req.body.loggedUserName = result.Name;

    return next();
    //return res.status(200).send(result);
  } catch (err) {
    return res.status(401).send("unauthorized");
  }
};
