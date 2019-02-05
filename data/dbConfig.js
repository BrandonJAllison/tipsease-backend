const knex = require('knex');

const config = require('../knexfile');

const environnment = process.env.TESTING_ENV || 'development';

module.exports = knex(config[environment]);
