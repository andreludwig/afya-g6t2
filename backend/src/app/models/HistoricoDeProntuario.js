const { Sequelize, Model } = require("sequelize");

class HistoricoDeProntuario extends Model {
  static init(sequelize) {
    super.init(
      {
        data: Sequelize.DATE,
        hora: Sequelize.DATE,
        descricao: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Especialista, {
      foreignKey: "id_especialista",
      as: "especialista",
    });
  }
}

module.exports = HistoricoDeProntuario;
