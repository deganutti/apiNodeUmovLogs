const { Sequelize, Model, DataTypes } = require("sequelize");

class AgentDetail extends Model {
  static init(sequelize) {
    super.init(
      {
        id_ambiente: DataTypes.INTEGER,
        id_agente: DataTypes.INTEGER,
        nome: DataTypes.STRING,
        login: DataTypes.STRING,
        agent_type_id: DataTypes.INTEGER,
        agent_type_description: DataTypes.STRING,
        agent_type_alternative_identifier: DataTypes.STRING,
        agent_tipe_active: DataTypes.STRING,
        weekly_work_day_id: DataTypes.INTEGER,
        weekly_work_day_active: DataTypes.STRING,
        weekly_work_day_alternative_identifier: DataTypes.STRING,
        weekly_work_day_task_creation_validation: DataTypes.INTEGER,
        weekly_work_day_validate_agent_disponibility: DataTypes.STRING,
        weekly_work_day_only_sync_when_agent_available: DataTypes.STRING,
        weekly_work_day_only_sync_gps_when_agent_vailable: DataTypes.STRING,
        weekly_work_day_block_login_during_Off_hours: DataTypes.STRING,
        active: DataTypes.STRING,
        current_situation: DataTypes.STRING,
        alternative_identifier: DataTypes.STRING,
        lock_login_in_change_imei: DataTypes.STRING,
        validade_cliente: DataTypes.STRING,
        center_web_user: DataTypes.STRING,
        mobile_user: DataTypes.STRING,
        bi_user: DataTypes.STRING,
        input_web_as_another_user: DataTypes.STRING,
        observation: DataTypes.STRING,
        country: DataTypes.STRING,
        state: DataTypes.STRING,
        city: DataTypes.STRING,
        neighborhood: DataTypes.STRING,
        street_type: DataTypes.STRING,
        street: DataTypes.STRING,
        street_complement: DataTypes.STRING,
        email: DataTypes.STRING,
        change_password: DataTypes.STRING,
        memorize_password_mobile: DataTypes.STRING,
        last_synchronism_date: DataTypes.DATEONLY,
        last_synchronism_time: DataTypes.TIME,
        agent_activities: DataTypes.STRING,
        export_status: DataTypes.STRING,
        view_service_local: DataTypes.STRING,
        imaei_last_sinchronism: DataTypes.STRING,
        blocked: DataTypes.STRING,
        wrong_login_attempts: DataTypes.STRING,
        root_user: DataTypes.STRING,
        time_zone: DataTypes.STRING,
        geolocalization: DataTypes.STRING,
        last_geo_position: DataTypes.STRING,
        passwords_settings: DataTypes.INTEGER,
        accessRole: DataTypes.STRING,
        custom_fields: DataTypes.STRING,
        image: DataTypes.STRING,
        last_level_battery_mobile: DataTypes.STRING,
        last_sync_platform: DataTypes.STRING,
        insert_date_time: DataTypes.DATE,
        last_update_date_time: DataTypes.DATE,
        agent_insert_id: DataTypes.INTEGER,
        agent_insert_name: DataTypes.STRING,
        agent_insert_alternative_identifier: DataTypes.STRING,
        agent_insert_bi_user: DataTypes.STRING,
        agent_insert_process_geo_coordinate: DataTypes.STRING,
        agent_update_id: DataTypes.INTEGER,
        agent_update_name: DataTypes.STRING,
        agent_update_alternative_identifier: DataTypes.STRING,
        agent_update_bi_user: DataTypes.STRING,
        agent_update_process_geo_coordinate: DataTypes.STRING,
        insert_module: DataTypes.STRING,
        update_module: DataTypes.STRING,
        is_to_search_geocorder: DataTypes.STRING,
        smart_push: DataTypes.STRING,
        provider_execution: DataTypes.INTEGER,
        precision_provider_execution: DataTypes.INTEGER,
        provider_tracking: DataTypes.INTEGER,
        provider_precision: DataTypes.INTEGER,
        process_geocoordinate: DataTypes.STRING
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Ambiente, {
      foreignKey: "id_ambiente",
      as: "ambiente",
    });
    this.belongsTo(models.AgentXml, {
      foreignKey: "id_agente",
      as: "angentxml",
    });
  }
}

module.exports = AgentDetail;
