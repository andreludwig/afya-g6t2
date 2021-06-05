"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("prontuarios", [
      {
        data_abertura: new Date(),
        id_cliente: "1",
        id_historico_de_prontuario: "2",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        data_abertura: new Date(),
        id_cliente: "3",
        id_historico_de_prontuario: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("prontuarios");
  },
};
