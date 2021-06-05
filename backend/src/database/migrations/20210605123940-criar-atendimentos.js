"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("atendimentos", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      data_agendamento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      data_atendimento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      hora_atendimento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      atendimento_status: {
        type: Sequelize.ENUM("Agendado", "Realizado", "Cancelado"),
        allowNull: false,
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        references: { model: "clientes", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("atendimentos");
  },
};
