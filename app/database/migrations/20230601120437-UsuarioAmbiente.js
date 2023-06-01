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
    await queryInterface.createTable('UsuarioAmbiente', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_ambiente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Ambiente",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      id_agente: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "AgentXml",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
      },
      nome_agente: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },
      login_agente: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },
      situacao_agente: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },      
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('UsuarioAmbiente');
  }
};
