const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Ambiente = require('../../app/models/Ambiente');
const AgentXml = require('../../app/models/AgentXml');


const connection = new Sequelize(dbConfig);


Ambiente.init(connection);


AgentXml.init(connection);
AgentXml.associate(connection.models);


module.exports = connection;