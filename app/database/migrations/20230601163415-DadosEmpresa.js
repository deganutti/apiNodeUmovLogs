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
    await queryInterface.createTable('DadosEmpresa', 
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        razao: {
          type: Sequelize.STRING(150),
          allowNull: false
        },
        fantasia: {
          type: Sequelize.STRING(150),
          allowNull: false
        },
        cnpj: {
          type: Sequelize.STRING(150),
          allowNull: false,
        },
        endereco: {
          type: Sequelize.STRING(150),
          allowNull: false,
        },
        numero: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },  
        complemento: {
          type: Sequelize.STRING(150),
          allowNull: true,
        },    
        bairro: {
          type: Sequelize.STRING(150),
          allowNull: false,
        },
        cidade: {
          type: Sequelize.STRING(150),
          allowNull: false,
        },
        estado: {
          type: Sequelize.STRING(150),
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      }
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('DadosEmpresa');
  }
};
