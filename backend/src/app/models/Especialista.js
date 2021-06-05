const { Sequelize, Model } = require("sequelize");

class Especialista extends Model {
  static init(sequelize) {
    super.init(
      {
        registro: Sequelize.STRING,
        nome: Sequelize.STRING,
        telefone: Sequelize.STRING,
        celular: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: "especialistas",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Endereco, {
      foreignKey: "id_endereco",
      as: "endereco",
    });
    this.belongsTo(models.Profissao, {
      foreignKey: "id_profissao",
      as: "profissao",
    });
  }
}

module.exports = Especialista;
