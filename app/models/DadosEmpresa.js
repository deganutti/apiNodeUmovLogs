const { Sequelize, Model, DataTypes } = require('sequelize');
class DadosEmpresa extends Model {
    static init(sequelize) {
      super.init(
        {
          razao: DataTypes.STRING,
          fantasia: DataTypes.STRING,
          cnpj: DataTypes.STRING, 
          endereco: DataTypes.STRING,
          numero: DataTypes.INTEGER,
          complemento: DataTypes.STRING,
          bairro: DataTypes.STRING,
          cidade: DataTypes.STRING,
          estado: DataTypes.STRING,
        },
        {
          sequelize,
        }
      );
    }
     
  }
  
  module.exports = DadosEmpresa;
  