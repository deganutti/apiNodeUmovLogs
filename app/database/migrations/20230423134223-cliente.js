'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('Cliente', { 
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      cpf_cnpj:{
        type:Sequelize.STRING(20),
        allowNull: false,
        unique:true,
      },
      rg_ie:{
        type:Sequelize.STRING(15),
        allowNull: false,
        defaultValue: "ISENTO",
      },
      nome:{
        type:Sequelize.STRING(150),
        allowNull: false,
      },
      nascimento:{
        type:Sequelize.DATEONLY,
      },
      sexo:{
        type:Sequelize.STRING(1),
        allowNull: true,
        comment:"Campo destinado a identificar sexo da pessoa, caso a pessoa for pessoa fisica deve-se identificar como M(masculino) ou F(Feminino) indiferente da orientação sexual",
      },
      cep:{
        type:Sequelize.STRING(10),
        allowNull:false,
      },
      endereco:{
        type:Sequelize.STRING(150),
        allowNull:false,
      },
      numero:{
        type:Sequelize.INTEGER,
        allowNull:false,
      },
      complemento:{
        type:Sequelize.STRING(100),
        allowNull:false,
      },
      bairro:{
        type:Sequelize.STRING(150),
        allowNull:false,
      },
      cidade:{
        type:Sequelize.STRING(150),
        allowNull:false,
      },
      estado:{
        type:Sequelize.STRING(150),
        allowNull:false,
        comment:"O estado deve ser Liberal. Ex: São Paulo e não SP",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('Cliente');
  }
};
