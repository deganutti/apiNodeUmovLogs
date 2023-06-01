const { Sequelize, Model, DataTypes } = require('sequelize');

class UsuarioAmbiente extends Model {
  static init(sequelize) {
    super.init(
      {
        id_ambiente: DataTypes.INTEGER,
        id_agente: DataTypes.INTEGER,
        nome_agente: DataTypes.STRING,
        login_agente: DataTypes.STRING,
        situacao_agente: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Ambiente, {
      foreignKey: "id_ambiente",
      as: "usuario_ambiente",
    });
    this.belongsTo(models.AgentXml, {
      foreignKey: "id_agente",
      as: "usuario_angentxml",
    });
  }
}

module.exports = UsuarioAmbiente;
