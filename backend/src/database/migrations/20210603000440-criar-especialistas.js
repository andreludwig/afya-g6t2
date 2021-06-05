'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('especialistas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      registro: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING,
      },
      celular: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      id_endereco: {
        type: Sequelize.INTEGER,
        references: { model: 'enderecos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      id_profissao: {
        type: Sequelize.INTEGER,
        references: { model: 'profissoes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('especialistas')
  }
};
