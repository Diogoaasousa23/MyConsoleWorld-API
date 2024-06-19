const authRouter = require("express").Router();
const controller = require("../../controllers/pgs/auth");

authRouter.post("/login", controller.signin);
authRouter.post("/signup", controller.signup);

module.exports = authRouter;
