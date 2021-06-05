"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("especialistas", [
      {
        registro: "326789",
        nome: "Arnaldo César Coelho",
        telefone: "(31) 3242-0028",
        celular: "(31) 98789-0118",
        email: "arnaldo.c.coelho@iclinic.com",
        id_endereco: "2",
        id_profissao: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        registro: "999821",
        nome: "Oswaldo Cruz",
        telefone: "(71) 3233-8899",
        celular: "(71) 98111-7707",
        email: "oswaldo.cruz@afya.com.br",
        id_endereco: "3",
        id_profissao: "3",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        registro: "212107",
        nome: "Machado de Assis",
        telefone: "(47) 3242-0028",
        celular: "(47) 98789-0118",
        email: "m_assis@unigranrio.com.br",
        id_endereco: "1",
        id_profissao: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("especialistas");
  },
};
