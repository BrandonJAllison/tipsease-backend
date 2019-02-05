const knex = require('knex');

const config = require('../knexfile');

const environnment = process.env.NODE_ENV || 'development';

module.exports = knex(config[environnment]);
