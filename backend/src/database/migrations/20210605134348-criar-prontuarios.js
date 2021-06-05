'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("prontuarios", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      data_abertura: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        references: { model: "clientes", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      id_historico_de_prontuario: {
        type: Sequelize.INTEGER,
        references: { model: "historico_de_prontuarios", key: "id" },
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
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("prontuarios")
  }
};
