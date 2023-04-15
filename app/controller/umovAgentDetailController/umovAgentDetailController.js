const http = require("https");
const convert = require("xml-js");
const iconvlite = require("iconv-lite");
const axios = require("axios").default;
const {Op} = require("sequelize");
const AgentXml = require("../../models/AgentXml");
const Ambiente = require("../../models/Ambiente");
const AgentDetail = require("../../models/AgentDetail");

module.exports = {
  async index(req, res) {
    try {
      const Agent = await AgentDetail.findAll();
      return res.json(Agent);
    } catch(e) {
      return res.status(404).json({
        code: 404,
        error: "Agentes não localizados",
        message: e.message,
      });
    }
  },
  async getAgentDetail(req, res) {
    var options = {
      method: "GET",
      url: "https://api.umov.me/CenterWeb/api//36376e975e5cf31d52f1590e9600ffeb5dfa1f/agent/1121036.xml",
    };

    axios
      .request(options)
      .then(function (response) {
        let agent = convert.xml2js(response.data, {
          compact: true,
          spaces: 1,
        });
       // console.log(agent['agent']['id']._text);
        return res.json(agent);
      })
      .catch(function (error) {
        console.error(error);
      });
  },
  async getAgentDetail2(req, res) {
     const {apiKey, agent} = req.params;     


    var options = {
      method: "GET",
      url: `https://api.umov.me/CenterWeb/api/${apiKey}/agent/${agent}.xml`,
    };

    axios
      .request(options)
      .then(function (response) {
        let agent = convert.xml2js(response.data, {
          compact: true,
          spaces: 4,
        });

        var agente = agent['agent'];

        var agent_id = agente['id']._text;
        var agent_name = agente['name']._text;
        var agent_login = agente['login']._text;
        var agent_active = agente['active']._text;
        var agent_currentSituation = agente['currentSituation']._text;
        var agent_lockLoginInChangeImei = agente['lockLoginInChangeImei']._text;
        var agent_validateClient = agente['validateClient']._text;
        var agent_centerwebUser = agente['centerwebUser']._text;
        var agent_mobileUser = agente['mobileUser']._text;
        var agent_executeSchedulesByPriority = agente['executeSchedulesByPriority']._text;
        var agent_biUser = agente['biUser']._text;
        var agent_inputWebAsAnotherUser = agente['inputWebAsAnotherUser']._text;
        var agent_changePassword = agente['changePassword']._text;
        var agent_memorizePasswordMobile = agente['memorizePasswordMobile']._text;
        var agent_lastSynchronismDate = agente['lastSynchronismDate']._text;
        var agent_lastSynchronismTime = agente['lastSynchronismTime']._text;
        var agent_exportStatus = agente['exportStatus']._text;
        var agent_viewServiceLocal = agente['viewServiceLocal']._text;
        var agent_blocked = agente['blocked']._text;
        var agent_wrongLoginAttempts = agente['wrongLoginAttempts']._text;
        var agent_lastLevelBatteryMobile = agente['lastLevelBatteryMobile']._text;
        var agent_insertModule = agente['insertModule']._text;
        var agent_updatedModule = agente['updatedModule']._text;
        var agent_isToSearchGeocoder = agente['isToSearchGeocoder']._text;
        var agent_smartPush = agente['smartPush']._text;
        var agent_providerExecution = agente['providerExecution']._text;
        var agent_providerTracking = agente['providerTracking']._text;
        var agent_processGeocoordinate = agente['processGeocoordinate']._text;
        var agent_lastSyncPlataform = agente['lastSyncPlataform']._text;

        if(agente['image']){
          var agent_image = agente['image'];
        } else {
          var agent_image= '';
        }

        if(agente['accessRole']){
          var agent_accessRole = agente['accessRole'];
        } else {
          var agent_accessRole = '';
        }

        if(agente['customFields']){
          var agent_customFields = agente['customFields'];
        } else {
          var agent_customFields = '';
        }

        if(agente['imeiLastSynchronism']._text){
          var agent_imeiLastSynchronism = agente['imeiLastSynchronism']._text;
        } else {
          var agent_imeiLastSynchronism ='Não Sincrinizado';
        }

        if(agente['agentActivities']){
          var agent_agentActivities = agente['agentActivities'];
        } else {
          var agent_agentActivities = '';
        }

        if(agente['alternativeIdentifier']._text){
          var agent_alternativeIdentifier = agente['alternativeIdentifier']._text;
        } else {
          var agent_alternativeIdentifier = 'Não Informado';
        }


        if(agente['agentType']){

          var agent_agentType_Id = agente['agentType']['id']._text;
          var agent_agentType_Description = agente['agentType']['description']._text;
          var agent_agentType_AlternativeIdentifier = agente['agentType']['alternativeIdentifier']._text;
          var agent_agentType_Active = agente['agentType']['active']._text;

        } else {
          var agent_agentType_Id = '0';
          var agent_agentType_Description = 'Não Informado';
          var agent_agentType_AlternativeIdentifier = 'Não Informado';
          var agent_agentType_Active = 'Não Informado';

        }

        if(agente['weeklyWorkday']){
          var agent_weeklyWorkDay_Id = agente['weeklyWorkday']['id']._text;
          var agent_weeklyWorkDay_Active = agente['weeklyWorkday']['active']._text;
          var agent_weeklyWorkDay_Description = agente['weeklyWorkday']['description']._text;
          var agent_weeklyWorkDay_AlternativeIdentifier = agente['weeklyWorkday']['alternativeIdentifier']._text;
          var agent_weeklyWorkDay_TaskCreationValidation = agente['weeklyWorkday']['taskCreationValidation']._text;
          var agent_weeklyWorkDay_ValidateAgentDisponibility = agente['weeklyWorkday']['validateAgentDisponibility']._text;
          var agent_weeklyWorkDay_OnlySyncWhenAgentAvailable = agente['weeklyWorkday']['onlySyncWhenAgentAvailable']._text;
          var agent_weeklyWorkDay_OnlySyncGPSWhenAgentAvailable = agente['weeklyWorkday']['onlySyncGPSWhenAgentAvailable']._text;
          var agent_weeklyWorkDay_BlockLoginDuringOffHours = agente['weeklyWorkday']['blockLoginDuringOffHours']._text;
        } else {
          var agent_weeklyWorkDay_Id = '0';
          var agent_weeklyWorkDay_Active = 'Não Informado';
          var agent_weeklyWorkDay_Description = 'Não Informado';
          var agent_weeklyWorkDay_AlternativeIdentifier = 'Não Informado';
          var agent_weeklyWorkDay_TaskCreationValidation = 'Não Informado';
          var agent_weeklyWorkDay_ValidateAgentDisponibility = 'Não Informado';
          var agent_weeklyWorkDay_OnlySyncWhenAgentAvailable = 'Não Informado';
          var agent_weeklyWorkDay_OnlySyncGPSWhenAgentAvailable = 'Não Informado';
          var agent_weeklyWorkDay_BlockLoginDuringOffHours = 'Não Informado';
        }

        if(agente['observation']._text){
          var agent_observation = agente['observation']._text;         
        } else {
          var agent_observation = 'Não Informado';
        }

        if(agente['country']._text){
          var agent_country = agente['country']._text;
        } else {
          var agent_country = 'Não Informado';
        }
        if(agente['state']._text){
          var agent_state = agente['state']._text;
        } else {
          var agent_state= 'Não Informado';
        }
        if(agente['city']._text){
          var agent_city = agente['city']._text;
        } else {
          var agent_city = 'Não Informado';
        }
        if(agente['neighborhood']._text){
          var agent_neighborhood = agente['neighborhood']._text;
        } else {
          var agent_neighborhood = 'Não Informado';
        }
        if(agente['streetType']._text){
          var agent_streetType = agente['streetType']._text;
        } else {
          var agent_streetType = 'Não Informado';
        }
        if(agente['street']._text){
          var agent_street = agente['street']._text;
        } else {
          var agent_street = 'Não Informado';
        }
        if(agente['streetComplement']._text){
          var agent_streetComplement = agente['streetComplement']._text;
        } else {
          var agent_streetComplement = 'Não Informado';
        }
        if(agente['email']._text){
          var agent_email = agente['email']._text;
        } else {
          var agent_email = 'Não Informado';
        }
        console.log(agent_lastSyncPlataform);
        return res.json(agent);
      })
      .catch(function (error) {
        console.error(error);
      });
  },

  async store(req, res) {
    try {
      /**
       * captura os dados dos agentes do center, e insere no banco de dados.
       * id_ambiente identifica a chave estrangeira na tabela ambientes.
       * agent e o código do agente.
       * url e a url /agent/numeroagente.xml
       */

      const {id_ambiente, id_agente} = req.params;
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
        accessRole,
        custom_fields,
        image,
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
        accessRole,
        custom_fields,
        image,
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
    } catch(e) {
      return res.status(404).json({
        code: 404,
        error: "Erro ao cadastrar o Agente.",
        message: e.message,
      });
    }
  },
};
