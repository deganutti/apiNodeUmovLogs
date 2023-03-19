"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('agentdetail', {
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
          model: "ambiente",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      id_agente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "agentxml",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      nome: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      login: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      agent_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      agent_type_description: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },
      agent_type_alternative_identifier: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      agent_tipe_active: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      weekly_work_day_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      weekly_work_day_active: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      weekly_work_day_description: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      weekly_work_day_alternative_identifier: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      weekly_work_day_task_creation_validation: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      weekly_work_day_validate_agent_disponibility: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      weekly_work_day_only_sync_when_agent_available: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      weekly_work_day_only_sync_gps_when_agent_vailable: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      weekly_work_day_block_login_during_Off_hours: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      active: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      current_situation: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      alternative_identifier: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },
      lock_login_in_change_imei: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      validade_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      center_web_user: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      mobile_user: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      execute_schedules_by_priority: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      bi_user: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      input_web_as_another_user: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      observation: {
        type: Sequelize.STRING(2000),
        allowNull: true,
      },
      country: {
        type: Sequelize.STRING(250),
        allowNull: true,
      },
      state: {
        type: Sequelize.STRING(250),
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING(250),
        allowNull: true,
      },
      neighborhood: {
        type: Sequelize.STRING(250),
        allowNull: true,
      },
      street_type: {
        type: Sequelize.STRING(250),
        allowNull: true,
      },
      street: {
        type: Sequelize.STRING(250),
        allowNull: true,
      },
      street_complement: {
        type: Sequelize.STRING(250),
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING(2000),
        allowNull: true,
      },
      change_password: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      memorize_password_mobile: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      last_synchronism_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      last_synchronism_time: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      agent_activities: {
        type: Sequelize.STRING(2000),
        allowNull: true,
      },
      export_status: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      view_service_local: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      imaei_last_sinchronism: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      blocked: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      wrong_login_attempts: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      root_user: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      time_zone: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      geolocalization: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      last_geo_position: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      passwords_settings: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      custom_fields: {
        type: Sequelize.STRING(2000),
        allowNull: true,
      },
      last_level_battery_mobile: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      last_sync_platform: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      insert_date_time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      last_update_date_time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      agent_insert_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      agent_insert_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      agent_insert_alternative_identifier: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      agent_insert_bi_user: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      agent_insert_process_geo_coordinate: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      agent_update_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      agent_update_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      agent_update_alternative_identifier: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      agent_update_bi_user: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      agent_update_process_geo_coordinate: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      insert_module: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      update_module: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      is_to_search_geocorder: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      smart_push: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      provider_execution: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      precision_provider_execution: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      provider_tracking: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      provider_precision: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      process_geocoordinate: {
        type: Sequelize.STRING(10),
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
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('agentdetail');
  },
};
