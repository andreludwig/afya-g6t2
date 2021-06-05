const { Sequelize, Model } = require("sequelize");

class Cliente extends Model {
  static init(sequelize) {
    super.init(
      {
        cpf: Sequelize.STRING,
        nome: Sequelize.STRING,
        telefone: Sequelize.STRING,
        celular: Sequelize.STRING,
        email: Sequelize.STRING,
        tipo_sanguineo: Sequelize.ENUM(
          "A+",
          "A-",
          "B+",
          "B-",
          "O+",
          "O-",
          "AB+",
          "AB-"
        ),
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Endereco, {
      foreignKey: "id_endereco",
      as: "endereco",
    });
  }
}

module.exports = Cliente;
