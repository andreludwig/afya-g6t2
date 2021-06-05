const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Endereco = require("../app/models/Endereco");
const Profissao = require("../app/models/Profissao");
const Cliente = require("../app/models/Cliente");
const Especialista = require("../app/models/Especialista");
const Usuario = require("../app/models/Usuario");
const Atendimento = require("../app/models/Atendimento");
const HistoricoDeProntuario = require("../app/models/HistoricoDeProntuario");
const Prontuario = require("../app/models/Prontuario");

const connection = new Sequelize(dbConfig);

const modelsInit = [
  Endereco,
  Profissao,
  Cliente,
  Especialista,
  Usuario,
  Atendimento,
  HistoricoDeProntuario,
  Prontuario,
];

modelsInit.map((model) => model.init(connection));

const modelsAssociate = [
  Cliente,
  Especialista,
  Atendimento,
  HistoricoDeProntuario,
  Prontuario,
];

modelsAssociate.map((model) => model.associate(connection.models));

module.exports = connection;
