"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("historico_de_prontuarios", [
      {
        data: new Date(),
        hora: new Date(),
        descricao: "Histórico1",
        id_especialista: "2",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        data: new Date(),
        hora: new Date(),
        descricao: "Histórico2",
        id_especialista: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("historico_de_prontuarios");
  },
};
