const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Ambiente = require('../../app/models/Ambiente');
const AgentXml = require('../../app/models/AgentXml');
const AgentDetail = require('../models/AgentDetail');


const connection = new Sequelize(dbConfig);


Ambiente.init(connection);
AgentXml.init(connection);
AgentDetail.init(connection);
AgentXml.associate(connection.models);
AgentDetail.associate(connection.models);


module.exports = connection;