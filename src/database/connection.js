const knex = require('knex');
const config = require('../../knexfile');

const connection = knex( process.env.NODE_ENV=='test'?config.development:config.production);

module.exports = connection;    