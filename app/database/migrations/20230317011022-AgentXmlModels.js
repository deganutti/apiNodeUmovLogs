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

    return queryInterface.createTable('agent_xml',[{
      id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
      },
      id_ambietne:{ 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ambiente',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',

      },
      id_agente :{
        type: Sequelize.STRING,
        allowNull: false,
      },
      link_agente :{
        type: Sequelize.STRING,
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
    }]);


  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('agent_xml');
  }
};
