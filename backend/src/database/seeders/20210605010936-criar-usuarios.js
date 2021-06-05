"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("usuarios", [
      {
        login: "admin",
        senha: "admin",
        nome: "Administrador",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        login: "andre",
        senha: "123456",
        nome: "André Ludwig Machado de Almeida",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        login: "bernardo",
        senha: "123456",
        nome: "Bernardo Furlan Mielki",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        login: "carlos",
        senha: "123456",
        nome: "Carlos Cesar",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("usuarios");
  },
};
