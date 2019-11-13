const { Router } = require("express");

const routes = Router();
const eventoController = require("./controller/eventoController");

routes.get("/status", (req, res) => {
  res.send("Servidor Online !");
});
routes.get("/evento", eventoController.findAll);
routes.post("/evento", eventoController.create);
routes.get("/evento/:id", eventoController.find);
routes.put("/evento/:id", eventoController.update);
routes.delete("/evento/:id", eventoController.delete);

module.exports = routes;
