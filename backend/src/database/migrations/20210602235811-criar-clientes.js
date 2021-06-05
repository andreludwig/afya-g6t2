'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('clientes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      cpf: {
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
      tipo_sanguineo: {
        type: Sequelize.ENUM('A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'),
        allowNull: false,
      },
      id_endereco: {
        type: Sequelize.INTEGER,
        references: { model: 'enderecos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    return queryInterface.dropTable('clientes')
  }
};
