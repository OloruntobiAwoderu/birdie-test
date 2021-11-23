const knex = require('knex');
const dbConfig = require('../../knexfile');
const { NODE_ENV } = require('../config/keys.js');

module.exports = knex(dbConfig.NODE_ENV);