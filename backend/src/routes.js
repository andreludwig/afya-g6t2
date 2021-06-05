const express = require("express");

const EnderecoController = require("./app/controllers/EnderecoController");
const ProfissaoController = require("./app/controllers/ProfissaoController");
const ClienteController = require("./app/controllers/ClienteController");
const EspecialistaController = require("./app/controllers/EspecialistaController");
const UsuarioController = require("./app/controllers/UsuarioController");
const AtendimentoController = require("./app/controllers/AtendimentoController");
const HistoricoDeProntuarioController = require("./app/controllers/HistoricoDeProntuarioController");
const ProntuarioController = require("./app/controllers/ProntuarioController");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ message: "API rodando" });
});

// Enderecos
routes.get("/enderecos", EnderecoController.list);
routes.get("/enderecos/:id", EnderecoController.get);
routes.post("/enderecos", EnderecoController.create);
routes.put("/enderecos/:id", EnderecoController.update);
routes.delete("/enderecos/:id", EnderecoController.delete);

// Profissoes
routes.get("/profissoes", ProfissaoController.list);
routes.get("/profissoes/:id", ProfissaoController.get);
routes.post("/profissoes", ProfissaoController.create);
routes.put("/profissoes/:id", ProfissaoController.update);
routes.delete("/profissoes/:id", ProfissaoController.delete);

// Clientes
routes.get("/clientes", ClienteController.list);
routes.get("/clientes/:id", ClienteController.get);
routes.post("/clientes", ClienteController.create);
routes.put("/clientes/:id", ClienteController.update);
routes.delete("/clientes/:id", ClienteController.delete);

// Especialistas
routes.get("/especialistas", EspecialistaController.list);
routes.get("/especialistas/:id", EspecialistaController.get);
routes.post("/especialistas", EspecialistaController.create);
routes.put("/especialistas/:id", EspecialistaController.update);
routes.delete("/especialistas/:id", EspecialistaController.delete);

// Usuarios
routes.get("/usuarios", UsuarioController.list);
routes.get("/usuarios/:id", UsuarioController.get);
routes.post("/usuarios", UsuarioController.create);
routes.put("/usuarios/:id", UsuarioController.update);
routes.delete("/usuarios/:id", UsuarioController.delete);

// Atendimentos
routes.get("/atendimentos", AtendimentoController.list);
routes.get("/atendimentos/:id", AtendimentoController.get);
routes.post("/atendimentos", AtendimentoController.create);
routes.put("/atendimentos/:id", AtendimentoController.update);
routes.delete("/atendimentos/:id", AtendimentoController.delete);

// Histórico de Prontuários
routes.get("/historico-de-prontuarios", HistoricoDeProntuarioController.list);
routes.get("/historico-de-prontuarios/:id", HistoricoDeProntuarioController.get);
routes.post("/historico-de-prontuarios", HistoricoDeProntuarioController.create);
routes.put("/historico-de-prontuarios/:id", HistoricoDeProntuarioController.update);
routes.delete("/historico-de-prontuarios/:id", HistoricoDeProntuarioController.delete);

// Prontuários
routes.get("/prontuarios", ProntuarioController.list);
routes.get("/prontuarios/:id", ProntuarioController.get);
routes.post("/prontuarios", ProntuarioController.create);
routes.put("/prontuarios/:id", ProntuarioController.update);
routes.delete("/prontuarios/:id", ProntuarioController.delete);

module.exports = routes;
