"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("enderecos", [
      {
        cep: "96745-000",
        logradouro: "Av. Piratini",
        numero: "504",
        bairro: "Centro",
        localidade: "Charqueadas",
        uf: "RS",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        cep: "20560-120",
        logradouro: "Rua Visconde de Santa Isabel",
        numero: "375",
        bairro: "Vila Isabel",
        localidade: "Rio de Janeiro",
        uf: "RJ",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        cep: "29030-010",
        logradouro: "Avenida Beira Mar",
        numero: "211",
        bairro: "São Pedro",
        localidade: "Vitória",
        uf: "ES",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("enderecos");
  },
};
