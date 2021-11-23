const knex = require('knex');
const { NODE_ENV } = require('../config/keys.js');
const dbConfig = require('../../knexfile').development;


module.exports = knex(dbConfig);