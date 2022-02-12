const KNEX = require('../../db/knex');

// Return books from list of books
function list() {
    KNEX.select('*').from('conservation_statuses')
    .then(conservation_statuses => {
        return JSON.stringify({
            data: conservation_statuses,
            message: 'OK'
        });
    })
    .catch(error => {
        return JSON.stringify({
            data: null,
            message: error
        });
    });
}

module.exports = {
    list
}