"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("clientes", [
      {
        cpf: "122.137.786-38",
        nome: "João dos Santos",
        telefone: "(27) 3268-4726",
        celular: "(27) 99888-8765",
        email: "joao.santos@gmail.com",
        tipo_sanguineo: "AB+",
        id_endereco: "3",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        cpf: "111.155.767-22",
        nome: "Bruce Wayne",
        telefone: "(51) 3244-7171",
        celular: "(51) 98777-8511",
        email: "bruce.batman@gotham.com",
        tipo_sanguineo: "A-",
        id_endereco: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        cpf: "133.878.233-13",
        nome: "Clark Kent",
        telefone: "(21) 3244-7171",
        celular: "(21) 98777-8511",
        email: "clark.kent@diarioplaneta.com",
        tipo_sanguineo: "O+",
        id_endereco: "2",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("clientes");
  },
};
