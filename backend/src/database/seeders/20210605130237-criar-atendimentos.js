"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("atendimentos", [
      {
        data_agendamento: new Date(),
        data_atendimento: new Date(),
        hora_atendimento: new Date(),
        valor: "150",
        atendimento_status: "Agendado",
        id_cliente: "2",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        data_agendamento: new Date(),
        data_atendimento: new Date(),
        hora_atendimento: new Date(),
        valor: "80",
        atendimento_status: "Realizado",
        id_cliente: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("atendimentos");
  },
};
