const { Sequelize, Model, DataTypes } = require('sequelize');

class AgentXml extends Model {
    static init(sequelize) {
        super.init({
            id_ambiente: DataTypes.INTEGER,
            id_agente: DataTypes.STRING,
            link_agente: DataTypes.STRING
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Ambiente, {
            foreignKey: "id_ambiente",
            as: 'ambiente',
        });
    }
}

module.exports = AgentXml