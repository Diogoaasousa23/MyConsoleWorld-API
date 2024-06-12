const carrosRouter = require("express").Router();
const controller = require("../../controllers/local/jogos");

//CRUD para o Carro
carrosRouter.get("/", controller.getAll); //le todos
carrosRouter.get("/:id", controller.getById); //le 1 carro pelo id
carrosRouter.post("/create", controller.create); //criar um novo carro
carrosRouter.put("/update", controller.update); //atualizar um carro
carrosRouter.delete("/delete/:id", controller.delete); //apagar um crro pelo id

module.exports = carrosRouter;
