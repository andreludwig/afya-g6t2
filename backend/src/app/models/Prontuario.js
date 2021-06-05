const { Sequelize, Model } = require("sequelize");

class Prontuario extends Model {
  static init(sequelize) {
    super.init(
      {
        data_abertura: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Cliente, {
      foreignKey: "id_cliente",
      as: "cliente",
    });

    this.belongsTo(models.HistoricoDeProntuario, {
      foreignKey: "id_historico_de_prontuario",
      as: "historico_de_prontuario",
    });
  }
}

module.exports = Prontuario;
