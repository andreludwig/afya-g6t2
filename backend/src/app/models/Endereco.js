const { Sequelize, Model } = require("sequelize");

class Endereco extends Model {
  static init(sequelize) {
    super.init(
      {
        cep: Sequelize.STRING,
        logradouro: Sequelize.STRING,
        numero: Sequelize.STRING,
        bairro: Sequelize.STRING,
        localidade: Sequelize.STRING,
        uf: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Endereco;
