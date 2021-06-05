const { Sequelize, Model } = require("sequelize");

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        login: Sequelize.STRING,
        senha: Sequelize.STRING,
        nome: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Usuario;
