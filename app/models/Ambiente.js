const { Sequelize, Model, DataTypes } = require('sequelize');

class Ambiente extends Model {
    static init(sequelize) {
        super.init({
            //   id: DataTypes.INTEGER,
            descricao: DataTypes.STRING,
            apikey: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = Ambiente;