const {Sequelize, Model, DataTypes} = require('sequelize');

class Cliente extends Model {
    static init(sequelize){
        super.init({
            cpf_cnpj:DataTypes.STRING,
            rg_ie:DataTypes.STRING,
            nome:DataTypes.STRING,
            nascimento:DataTypes.DATEONLY,
            sexo:DataTypes.STRING,
            cep:DataTypes.STRING,
            endereco:DataTypes.STRING,
            numero:DataTypes.INTEGER,
            complemento:DataTypes.STRING,
            bairro:DataTypes.STRING,
            cidade:DataTypes.STRING,
            estado:DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Cliente;