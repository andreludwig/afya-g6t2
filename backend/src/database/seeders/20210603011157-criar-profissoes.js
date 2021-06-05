"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("profissoes", [
      {
        nome: "Cardiologista",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: "Clínico Geral",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: "Oftalmologista",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("profissoes");
  },
};
