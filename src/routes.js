const express = require("express");

const routes = express.Router();
const PessoaController = require("./app/controller/PessoaController")

//single route dos cria
routes.get("/:mode/:dataType", PessoaController.index);

module.exports = routes;