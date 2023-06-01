const { Sequelize, Model, DataTypes } = require('sequelize');

class LicencaEmpresa extends Model {
  static init(sequelize) {
    super.init(
      {
        id_empresa: DataTypes.INTEGER,
        data_movimento: DataTypes.DATE,
        quantidade: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.DadosEmpresa, {
      foreignKey: "id_empresa",
      as: "DadosEmpresa",
    });
  }
}

module.exports = LicencaEmpresa;
