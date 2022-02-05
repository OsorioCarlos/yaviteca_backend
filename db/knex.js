const config = require('../config');

var knex = require('knex')({
    client: 'pg',
    connection: {
        host: config.db.host,
        port: config.db.port,
        user: config.db.user,
        password: config.db.password,
        database: config.db.database
    },
    migrations: {
        directory: __dirname + config.db.migrations_folder
    },
    seeds: {
        directory: __dirname + config.db.seeds_folder
    }
});

module.exports = knex;