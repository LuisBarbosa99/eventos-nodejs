//importando as bibliotecas necessárias
const express = require("express");
const mongoose = require("mongoose");

class App {
  constructor() {
    //criando nosso servidor
    this.server = express();
    this.database();
    this.middlewares();
    this.routes();
  }
  database() {
    //iniciar mongodb na maquina de vocês
    mongoose.connect("mongodb://localhost/evento");
  }
  //Interceptadores de rotas
  middlewares() {
    //tradução de json para um linguagem que o servidor entenda
    this.server.use(express.json());
  }
  routes() {
    //importanto o arquivo de rotas
    this.server.use(require("./routes"));
  }
}

//exportando nosso arquivo de app
module.exports = new App().server;
