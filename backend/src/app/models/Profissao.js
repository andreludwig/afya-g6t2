const { Sequelize, Model } = require("sequelize");

class Profissao extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: "profissoes",
      }
    );
  }
}

module.exports = Profissao;
