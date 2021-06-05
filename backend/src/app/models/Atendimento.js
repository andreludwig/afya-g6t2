const { Sequelize, Model } = require("sequelize");

class Atendimento extends Model {
  static init(sequelize) {
    super.init(
      {
        data_agendamento: Sequelize.DATE,
        data_atendimento: Sequelize.DATE,
        hora_atendimento: Sequelize.DATE,
        valor: Sequelize.FLOAT,
        atendimento_status: Sequelize.ENUM(
          "Agendado",
          "Realizado",
          "Cancelado"
        ),
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
  }
}

module.exports = Atendimento;
