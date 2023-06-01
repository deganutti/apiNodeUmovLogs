const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Ambiente = require('../../app/models/Ambiente');
const AgentXml = require('../../app/models/AgentXml');
const AgentDetail = require('../models/AgentDetail');
const UsuarioAmbiente = require('../models/UsuarioAmbiente');
const DadosEmpresa = require('../models/DadosEmpresa');
const LicencaEmpresa = require('../models/LicencaEmpresa');


const connection = new Sequelize(dbConfig);


Ambiente.init(connection);
AgentXml.init(connection);
AgentDetail.init(connection);
UsuarioAmbiente.init(connection);
DadosEmpresa.init(connection);
LicencaEmpresa.init(connection);


AgentXml.associate(connection.models);
AgentDetail.associate(connection.models);
UsuarioAmbiente.associate(connection.models);
LicencaEmpresa.associate(connection.models);
//DadosEmpresa.associate(connection.models);


module.exports = connection;