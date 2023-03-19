const http = require("https");
const convert = require("xml-js");
const iconvlite = require("iconv-lite");
const axios = require("axios").default;
const { Op } = require("sequelize");

const AgentXml = require("../../models/AgentXml");
const Ambiente = require("../../models/Ambiente");
const AgentDetail = require("../../models/AgentDetail");

module.exports = {
  async index(req, res) {
    try {
      const Agent = await AgentDetail.findAll();
      return res.json(Agent);
    } catch (e) {
      return res.status(404).json({
        code: 404,
        error: "Agentes não localizados",
        message: e.message,
      });
    }
  },
  async store(req, res) {
    try {
      /**
       * captura os dados dos agentes do center, e insere no banco de dados.
       * id_ambiente identifica a chave estrangeira na tabela ambientes.
       * agent e o código do agente.
       * url e a url /agent/numeroagente.xml
       */

      const { id_ambiente, id_agente } = req.params;
      const {
        nome,
        login,
        agent_type_id,
        agent_type_description,
        agent_type_alternative_identifier,
        agent_tipe_active,
        weekly_work_day_id,
        weekly_work_day_active,
        weekly_work_day_alternative_identifier,
        weekly_work_day_task_creation_validation,
        weekly_work_day_validate_agent_disponibility,
        weekly_work_day_only_sync_when_agent_available,
        weekly_work_day_only_sync_gps_when_agent_vailable,
        weekly_work_day_block_login_during_Off_hours,
        active,
        current_situation,
        alternative_identifier,
        lock_login_in_change_imei,
        validade_cliente,
        center_web_user,
        mobile_user,
        execute_schedules_by_priority,
        bi_user,
        input_web_as_another_user,
        observation,
        country,
        state,
        city,
        neighborhood,
        street_type,
        street,
        street_complement,
        email,
        change_password,
        memorize_password_mobile,
        last_synchronism_date,
        last_synchronism_time,
        agent_activities,
        export_status,
        view_service_local,
        imaei_last_sinchronism,
        blocked,
        wrong_login_attempts,
        root_user,
        time_zone,
        geolocalization,
        last_geo_position,
        passwords_settings,
        custom_fields,
        last_level_battery_mobile,
        last_sync_platform,
        insert_date_time,
        last_update_date_time,
        agent_insert_id,
        agent_insert_name,
        agent_insert_alternative_identifier,
        agent_insert_bi_user,
        agent_insert_process_geo_coordinate,
        agent_update_id,
        agent_update_name,
        agent_update_alternative_identifier,
        agent_update_bi_user,
        agent_update_process_geo_coordinate,
        insert_module,
        update_module,
        is_to_search_geocorder,
        smart_push,
        provider_execution,
        precision_provider_execution,
        provider_tracking,
        provider_precision,
        process_geocoordinate,
      } = req.body;
      const Agente = await AgentDetail.create({
        id_ambiente,
        id_agente,
        nome,
        login,
        agent_type_id,
        agent_type_description,
        agent_type_alternative_identifier,
        agent_tipe_active,
        weekly_work_day_id,
        weekly_work_day_active,
        weekly_work_day_alternative_identifier,
        weekly_work_day_task_creation_validation,
        weekly_work_day_validate_agent_disponibility,
        weekly_work_day_only_sync_when_agent_available,
        weekly_work_day_only_sync_gps_when_agent_vailable,
        weekly_work_day_block_login_during_Off_hours,
        active,
        current_situation,
        alternative_identifier,
        lock_login_in_change_imei,
        validade_cliente,
        center_web_user,
        mobile_user,
        execute_schedules_by_priority,
        bi_user,
        input_web_as_another_user,
        observation,
        country,
        state,
        city,
        neighborhood,
        street_type,
        street,
        street_complement,
        email,
        change_password,
        memorize_password_mobile,
        last_synchronism_date,
        last_synchronism_time,
        agent_activities,
        export_status,
        view_service_local,
        imaei_last_sinchronism,
        blocked,
        wrong_login_attempts,
        root_user,
        time_zone,
        geolocalization,
        last_geo_position,
        passwords_settings,
        custom_fields,
        last_level_battery_mobile,
        last_sync_platform,
        insert_date_time,
        last_update_date_time,
        agent_insert_id,
        agent_insert_name,
        agent_insert_alternative_identifier,
        agent_insert_bi_user,
        agent_insert_process_geo_coordinate,
        agent_update_id,
        agent_update_name,
        agent_update_alternative_identifier,
        agent_update_bi_user,
        agent_update_process_geo_coordinate,
        insert_module,
        update_module,
        is_to_search_geocorder,
        smart_push,
        provider_execution,
        precision_provider_execution,
        provider_tracking,
        provider_precision,
        process_geocoordinate,
      });
      return res.json(Agente);
    } catch (e) {
      return res.status(404).json({
        code: 404,
        error: "Erro ao cadastrar o Agente.",
        message: e.message,
      });
    }
  },
};
