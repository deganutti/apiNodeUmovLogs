const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Ambiente = require('../../app/models/Ambiente');
const AgentXml = require('../../app/models/AgentXml');


const connection = new Sequelize(dbConfig);


AgentXml.init(connection);
Ambiente.init(connection);


AgentXml.associate(connection.models);


module.exports = connection;