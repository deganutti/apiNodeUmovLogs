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
  async getAgentDetail2(req, res) {
    var options = {
      method: "GET",
      url: "https://api.umov.me/CenterWeb/api//36376e975e5cf31d52f1590e9600ffeb5dfa1f/agent/1062099.xml",
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
  async getAgentDetail(req, res) {
    var { apiKey, agent } = req.params;

    var ambiente = await Ambiente.findOne({
      where: {
        apikey: apiKey,
      },
    });
    var ambienteId = ambiente["id"];
    console.log(ambienteId);
    var agentePath = await AgentXml.findOne({
      where: {
        id_agente: agent,
      },
    });
    var agent_id = agentePath.id;
    console.log(agent_id);
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

        var agente = agent["agent"];
        var id_ambiente = ambienteId;
        var id = agent_id;
        var name = agente["name"]._text;
        var login = agente["login"]._text;
        var active = agente["active"]._text;
        var currentSituation = agente["currentSituation"]._text;
        var lockLoginInChangeImei = agente["lockLoginInChangeImei"]._text;
        var validateClient = agente["validateClient"]._text;
        var centerwebUser = agente["centerwebUser"]._text;
        var mobileUser = agente["mobileUser"]._text;
        var executeSchedulesByPriority =
          agente["executeSchedulesByPriority"]._text;
        var biUser = agente["biUser"]._text;
        var inputWebAsAnotherUser = agente["inputWebAsAnotherUser"]._text;
        var changePassword = agente["changePassword"]._text;
        var memorizePasswordMobile = agente["memorizePasswordMobile"]._text;
        if (agente["lastSynchronismDate"]) {
          var lastSynchronismDate = agente["lastSynchronismDate"]._text;
        } else {
          var lastSynchronismDate = "2000-01-01";
        }
        if (agente["lastSynchronismTime"]) {
          var lastSynchronismTime = agente["lastSynchronismTime"]._text;
        } else {
          var lastSynchronismTime = "00:00:00";
        }
        var exportStatus = agente["exportStatus"]._text;
        var viewServiceLocal = agente["viewServiceLocal"]._text;
        var blocked = agente["blocked"]._text;
        var wrongLoginAttempts = agente["wrongLoginAttempts"]._text;
        if (agente["lastLevelBatteryMobile"]) {
          var lastLevelBatteryMobile = agente["lastLevelBatteryMobile"]._text;
        } else {
          var lastLevelBatteryMobile = "0";
        }
        var insertModule = agente["insertModule"]._text;
        var updatedModule = agente["updatedModule"]._text;
        var isToSearchGeocoder = agente["isToSearchGeocoder"]._text;
        if (agente["smartPush"]) {
          var smartPush = agente["smartPush"]._text;
        } else {
          var smartPush = "0";
        }
        if (agente["timezone"]) {
          var timezone = agente["timezone"]._text;
        } else {
          var timezone = "";
        }
        if (agente["providerExecution"]) {
          var providerExecution = agente["providerExecution"]._text;
        } else {
          var providerExecution = '';
        }
        if (agente["providerTracking"]) {
          var providerTracking = agente["providerTracking"]._text;
        } else {
          var providerTracking = '';
        }
        var processGeocoordinate = agente["processGeocoordinate"]._text;
        if (agente["precisionProviderExecution"]) {
          var precisionProviderExecution =
            agente["precisionProviderExecution"]._text;
        } else {
          var precisionProviderExecution = "0";
        }
        if (agente["providerPrecision"]) {
          var providerPrecision = agente["providerPrecision"]._text;
        } else {
          var providerPrecision = "0";
        }

        if (agente["lastSyncPlataform"]) {
          var lastSyncPlataform = agente["lastSyncPlataform"]._text;
        } else {
          var lastSyncPlataform = "Não Informado";
        }

        if (agente["image"]) {
          var image = agente["image"];
        } else {
          var image = "";
        }

        if (agente["passwordSettings"]) {
          var passwordSettings = agente["passwordSettings"]._text;
        } else {
          var passwordSettings = "0";
        }

        if (agente["accessRole"]) {
          var accessRole = agente["accessRole"];
        } else {
          var accessRole = "";
        }

        if (agente["rootUser"]) {
          var rootUser = agente["rootUser"]._text;
        } else {
          var rootUser = "false";
        }

        if (agente["geoLocation"]) {
          var geoLocation = agente["geoLocation"];
        } else {
          var geoLocation = "0";
        }

        if (agente["lastGeoPosition"]) {
          var lastGeoPosition = agente["lastGeoPosition"];
        } else {
          var lastGeoPosition = "false";
        }

        if (agente["customFields"]) {
          var customFields = agente["customFields"];
        } else {
          var customFields = "";
        }

        if (agente["imeiLastSynchronism"]._text) {
          var imeiLastSynchronism = agente["imeiLastSynchronism"]._text;
        } else {
          var imeiLastSynchronism = "Não Sincrinizado";
        }

        if (agente["agentActivities"]) {
          var agentActivities = agente["agentActivities"];
        } else {
          var agentActivities = "";
        }

        if (agente["alternativeIdentifier"]._text) {
          var alternativeIdentifier = agente["alternativeIdentifier"]._text;
        } else {
          var alternativeIdentifier = "Não Informado";
        }

        if (agente["insertDateTime"]) {
          var insertDateTime = agente["insertDateTime"]._text;
        } else {
          var insertDateTime = "2000-01-01 00:00:00";
        }

        if (agente["lastUpdateDateTime"]) {
          var lastUpdateDateTime = agente["lastUpdateDateTime"]._text;
        } else {
          var lastUpdateDateTime = "2000-01-01 00:00:00";
        }

        if (agente["agentType"]) {
          var agent_agentType_Id = agente["agentType"]["id"]._text;
          var agent_agentType_Description =
            agente["agentType"]["description"]._text;
          var agent_agentType_AlternativeIdentifier =
            agente["agentType"]["alternativeIdentifier"]._text;
          var agent_agentType_Active = agente["agentType"]["active"]._text;
        } else {
          var agent_agentType_Id = "0";
          var agent_agentType_Description = "Não Informado";
          var agent_agentType_AlternativeIdentifier = "Não Informado";
          var agent_agentType_Active = "Não Informado";
        }

        if (agent["agentInsert"]) {
          var agentInsertId = agent["agentInsert"]["id"]._text;
          var agentInsertName = agent["agentInsert"]["name"]._text;
          var agentInsertAlternativeIdentifier =
            agent["agentInsert"]["alternativeIdentifier"]._text;
          var agentInsertBiUser = agent["agentInsert"]["biUser"]._text;
          var agentInsertProcessGeocoordinate =
            agent["agentInsert"]["processGeocoordinate"]._text;
        } else {
          var agentInsertId = "0";
          var agentInsertName = "Não Informado";
          var agentInsertAlternativeIdentifier = "Não Informado";
          var agentInsertBiUser = "0";
          var agentInsertProcessGeocoordinate = "0";
        }

        if (agent["agentLastUpdate"]) {
          var agentUpdateId = agent["agentLastUpdate"]["id"]._text;
          var agentUpdateName = agent["agentLastUpdate"]["name"]._text;
          var agentUpdateAlternativeIdentifier =
            agent["agentLastUpdate"]["alternativeIdentifier"]._text;
          var agentUpdateBiUser = agent["agentLastUpdate"]["biUser"]._text;
          var agentUpdateProcessGeocoordinate =
            agent["agentLastUpdate"]["processGeocoordinate"]._text;
        } else {
          var agentUpdateId = "0";
          var agentUpdateName = "Não Informado";
          var agentUpdateAlternativeIdentifier = "Não Informado";
          var agentUpdateBiUser = "0";
          var agentUpdateProcessGeocoordinate = "0";
        }

        if (agente["weeklyWorkday"]) {
          var agent_weeklyWorkDay_Id = agente["weeklyWorkday"]["id"]._text;
          var agent_weeklyWorkDay_Active =
            agente["weeklyWorkday"]["active"]._text;
          var agent_weeklyWorkDay_Description =
            agente["weeklyWorkday"]["description"]._text;
          var agent_weeklyWorkDay_AlternativeIdentifier =
            agente["weeklyWorkday"]["alternativeIdentifier"]._text;
          var agent_weeklyWorkDay_TaskCreationValidation =
            agente["weeklyWorkday"]["taskCreationValidation"]._text;
          var agent_weeklyWorkDay_ValidateAgentDisponibility =
            agente["weeklyWorkday"]["validateAgentDisponibility"]._text;
          var agent_weeklyWorkDay_OnlySyncWhenAgentAvailable =
            agente["weeklyWorkday"]["onlySyncWhenAgentAvailable"]._text;
          var agent_weeklyWorkDay_OnlySyncGPSWhenAgentAvailable =
            agente["weeklyWorkday"]["onlySyncGPSWhenAgentAvailable"]._text;
          var agent_weeklyWorkDay_BlockLoginDuringOffHours =
            agente["weeklyWorkday"]["blockLoginDuringOffHours"]._text;
        } else {
          var agent_weeklyWorkDay_Id = "0";
          var agent_weeklyWorkDay_Active = "Não Informado";
          var agent_weeklyWorkDay_Description = "Não Informado";
          var agent_weeklyWorkDay_AlternativeIdentifier = "Não Informado";
          var agent_weeklyWorkDay_TaskCreationValidation = "Não Informado";
          var agent_weeklyWorkDay_ValidateAgentDisponibility = "Não Informado";
          var agent_weeklyWorkDay_OnlySyncWhenAgentAvailable = "Não Informado";
          var agent_weeklyWorkDay_OnlySyncGPSWhenAgentAvailable =
            "Não Informado";
          var agent_weeklyWorkDay_BlockLoginDuringOffHours = "Não Informado";
        }

        if (agente["observation"]._text) {
          var observation = agente["observation"]._text;
        } else {
          var observation = "Não Informado";
        }

        if (agente["country"]._text) {
          var country = agente["country"]._text;
        } else {
          var country = "Não Informado";
        }

        if (agente["state"]._text) {
          var state = agente["state"]._text;
        } else {
          var state = "Não Informado";
        }

        if (agente["city"]._text) {
          var city = agente["city"]._text;
        } else {
          var city = "Não Informado";
        }
        if (agente["neighborhood"]._text) {
          var neighborhood = agente["neighborhood"]._text;
        } else {
          var neighborhood = "Não Informado";
        }
        if (agente["streetType"]._text) {
          var streetType = agente["streetType"]._text;
        } else {
          var streetType = "Não Informado";
        }
        if (agente["street"]._text) {
          var street = agente["street"]._text;
        } else {
          var street = "Não Informado";
        }
        if (agente["streetComplement"]._text) {
          var streetComplement = agente["streetComplement"]._text;
        } else {
          var streetComplement = "Não Informado";
        }
        if (agente["email"]._text) {
          var email = agente["email"]._text;
        } else {
          var email = "Não Informado";
        }
        const dados = {
          id_ambiente: id_ambiente,
          id_agente: id,
          nome: name,
          login: login,
          active: active,
          current_situation: currentSituation,
          alternative_identifier: alternativeIdentifier,
          lock_login_in_change_imei: lockLoginInChangeImei,
          validade_cliente: validateClient,
          center_web_user: centerwebUser,
          mobile_user: mobileUser,
          execute_schedules_by_priority: executeSchedulesByPriority,
          bi_user: biUser,
          input_web_as_another_user: inputWebAsAnotherUser,
          observation: observation,
          country: country,
          state: state,
          city: city,
          neighborhood: neighborhood,
          street_type: streetType,
          street: street,
          street_complement: streetComplement,
          email: email,
          change_password: changePassword,
          memorize_password_mobile: memorizePasswordMobile,
          last_synchronism_date: lastSynchronismDate,
          last_synchronism_time: lastSynchronismTime,
          agent_activities: agentActivities,
          export_status: exportStatus,
          view_service_local: viewServiceLocal,
          imaei_last_sinchronism: imeiLastSynchronism,
          blocked: blocked,
          wrong_login_attempts: wrongLoginAttempts,
          root_user: rootUser,
          time_zone: timezone,
          geolocalization: geoLocation,
          last_geo_position: lastGeoPosition,
          passwords_settings: passwordSettings,
          accessRole: accessRole,
          custom_fields: customFields,
          image: image,
          last_level_battery_mobile: lastLevelBatteryMobile,
          last_sync_platform: lastSyncPlataform,
          insert_date_time: insertDateTime,
          last_update_date_time: lastUpdateDateTime,
          insert_module: insertModule,
          update_module: updatedModule,
          is_to_search_geocorder: isToSearchGeocoder,
          smart_push: smartPush,
          provider_execution: providerExecution,
          precision_provider_execution: precisionProviderExecution,
          provider_tracking: providerTracking,
          provider_precision: providerPrecision,
          process_geocoordinate: processGeocoordinate,
          agent_type_id: agent_agentType_Id,
          agent_type_description: agent_agentType_Description,
          agent_type_alternative_identifier:
            agent_agentType_AlternativeIdentifier,
          agent_tipe_active: agent_agentType_Active,
          agent_insert_id: agentInsertId,
          agent_insert_name: agentInsertName,
          agent_insert_alternative_identifier: agentInsertAlternativeIdentifier,
          agent_insert_bi_user: agentInsertBiUser,
          agent_insert_process_geo_coordinate: agentInsertProcessGeocoordinate,
          agent_update_id: agentUpdateId,
          agent_update_name: agentUpdateName,
          agent_update_alternative_identifier: agentUpdateAlternativeIdentifier,
          agent_update_bi_user: agentUpdateBiUser,
          agent_update_process_geo_coordinate: agentUpdateProcessGeocoordinate,
          weekly_work_day_id: agent_weeklyWorkDay_Id,
          weekly_work_day_active: agent_weeklyWorkDay_Active,
          weekly_work_day_alternative_identifier:
            agent_weeklyWorkDay_Description,
          weekly_work_day_description:
            agent_weeklyWorkDay_AlternativeIdentifier,
          weekly_work_day_task_creation_validation:
            agent_weeklyWorkDay_TaskCreationValidation,
          weekly_work_day_validate_agent_disponibility:
            agent_weeklyWorkDay_ValidateAgentDisponibility,
          weekly_work_day_only_sync_when_agent_available:
            agent_weeklyWorkDay_OnlySyncWhenAgentAvailable,
          weekly_work_day_only_sync_gps_when_agent_vailable:
            agent_weeklyWorkDay_OnlySyncGPSWhenAgentAvailable,
          weekly_work_day_block_login_during_Off_hours:
            agent_weeklyWorkDay_BlockLoginDuringOffHours,
        };
        // return res.json(dados);
        //console.log(dados);

        var data = new Date();
        var dia = data.getDate().toString().padStart(2, "0") - 3;
        var mes = String(data.getMonth() + 1).padStart(2, "0");
        var ano = data.getFullYear();

        var hoje = `${ano}-${mes}-${dia}`;

        var dtAtualizacao = new Date(lastUpdateDateTime);
        var diaAtualizacao = dtAtualizacao
          .getDate()
          .toString()
          .padStart(2, "0");
        var mesAtualizacao = String(dtAtualizacao.getMonth() + 1).padStart(
          2,
          "0"
        );
        var anoAtualizacao = dtAtualizacao.getFullYear();
        var dtCorreta = `${anoAtualizacao}-${mesAtualizacao}-${diaAtualizacao}`;

        console.log(`Atualização ${dtCorreta}`);
        console.log(`Hoje => ${hoje}`);
        if (hoje <= dtCorreta) {
          console.log("Passou data menor");
          console.log(`Ultimo Update => ${lastUpdateDateTime}`);
          console.log(`Hoje => ${hoje}`);

          
        }
        var options = {
          method: "POST",
          url: `http://127.0.0.1:88/agentdetail`,
          headers: { "Content-Type": "application/json" },
          data: {
            id_ambiente: id_ambiente,
            id_agente: id,
            nome: name,
            login: login,
            active: active,
            current_situation: currentSituation,
            alternative_identifier: alternativeIdentifier,
            lock_login_in_change_imei: lockLoginInChangeImei,
            validade_cliente: validateClient,
            center_web_user: centerwebUser,
            mobile_user: mobileUser,
            execute_schedules_by_priority: executeSchedulesByPriority,
            bi_user: biUser,
            input_web_as_another_user: inputWebAsAnotherUser,
            observation: observation,
            country: country,
            state: state,
            city: city,
            neighborhood: neighborhood,
            street_type: streetType,
            street: street,
            street_complement: streetComplement,
            email: email,
            change_password: changePassword,
            memorize_password_mobile: memorizePasswordMobile,
            last_synchronism_date: lastSynchronismDate,
            last_synchronism_time: lastSynchronismTime,
            agent_activities: agentActivities,
            export_status: exportStatus,
            view_service_local: viewServiceLocal,
            imaei_last_sinchronism: imeiLastSynchronism,
            blocked: blocked,
            wrong_login_attempts: wrongLoginAttempts,
            root_user: rootUser,
            time_zone: timezone,
            geolocalization: geoLocation,
            last_geo_position: lastGeoPosition,
            passwords_settings: passwordSettings,
            accessRole: accessRole,
            custom_fields: customFields,
            image: image,
            last_level_battery_mobile: lastLevelBatteryMobile,
            last_sync_platform: lastSyncPlataform,
            insert_date_time: insertDateTime,
            last_update_date_time: lastUpdateDateTime,
            insert_module: insertModule,
            update_module: updatedModule,
            is_to_search_geocorder: isToSearchGeocoder,
            smart_push: smartPush,
            provider_execution: providerExecution,
            precision_provider_execution: precisionProviderExecution,
            provider_tracking: providerTracking,
            provider_precision: providerPrecision,
            process_geocoordinate: processGeocoordinate,
            agent_type_id: agent_agentType_Id,
            agent_type_description: agent_agentType_Description,
            agent_type_alternative_identifier:
              agent_agentType_AlternativeIdentifier,
            agent_tipe_active: agent_agentType_Active,
            agent_insert_id: agentInsertId,
            agent_insert_name: agentInsertName,
            agent_insert_alternative_identifier:
              agentInsertAlternativeIdentifier,
            agent_insert_bi_user: agentInsertBiUser,
            agent_insert_process_geo_coordinate:
              agentInsertProcessGeocoordinate,
            agent_update_id: agentUpdateId,
            agent_update_name: agentUpdateName,
            agent_update_alternative_identifier:
              agentUpdateAlternativeIdentifier,
            agent_update_bi_user: agentUpdateBiUser,
            agent_update_process_geo_coordinate:
              agentUpdateProcessGeocoordinate,
            weekly_work_day_id: agent_weeklyWorkDay_Id,
            weekly_work_day_active: agent_weeklyWorkDay_Active,
            weekly_work_day_alternative_identifier:
              agent_weeklyWorkDay_Description,
            weekly_work_day_description:
              agent_weeklyWorkDay_AlternativeIdentifier,
            weekly_work_day_task_creation_validation:
              agent_weeklyWorkDay_TaskCreationValidation,
            weekly_work_day_validate_agent_disponibility:
              agent_weeklyWorkDay_ValidateAgentDisponibility,
            weekly_work_day_only_sync_when_agent_available:
              agent_weeklyWorkDay_OnlySyncWhenAgentAvailable,
            weekly_work_day_only_sync_gps_when_agent_vailable:
              agent_weeklyWorkDay_OnlySyncGPSWhenAgentAvailable,
            weekly_work_day_block_login_during_Off_hours:
              agent_weeklyWorkDay_BlockLoginDuringOffHours,
          },
        };
        //console.log(options);
        axios
          .request(options)
          .then(function (response) {
            // console.log(response.data);
            return res.json(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });
      })

      .catch(function (error) {
        console.error(error);
      });
  },

  async store(req, res, next) {
    try {
      /**
       * captura os dados dos agentes do center, e insere no banco de dados.
       * id_ambiente identifica a chave estrangeira na tabela ambientes.
       * agent e o código do agente.
       * url e a url /agent/numeroagente.xml
       */

      // const {id_ambiente, id_agente} = req.params;
      var {
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
        weekly_work_day_description,
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

      const agente = await AgentDetail.create({
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
        weekly_work_day_description,
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

      return res.json(agente);
    } catch (e) {
      console.error(e);
      return res.status(404).json({
        code: 404,
        error: "Erro ao cadastrar o Agente.",
        message: e.message,
      });
    }
  },
};
