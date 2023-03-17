const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const ambiente = require('../../app/models/Ambiente');


const connection = new Sequelize(dbConfig);

ambiente.init(connection);


module.exports = connection;