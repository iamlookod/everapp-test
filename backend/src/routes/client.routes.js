
const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/client.controller");

module.exports = function (app) {
  app.post("/api/client/", authJwt.verifyToken, controller.create);
  app.put("/api/client/:id", authJwt.verifyToken, controller.update);
  app.delete("/api/client/:id", authJwt.verifyToken, controller.delete);
  app.get("/api/client/:id", authJwt.verifyToken, controller.findOne);
  app.get("/api/client", authJwt.verifyToken, controller.findAll);

};