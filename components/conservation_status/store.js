//const KNEX = require('../../db/knex');

// Mock database
const CONSERVATION_STATUSES = [{id: 1, name: 'Bueno'}, {id: 2, name: 'Malo'}];

// Return books from list of books
function list() {
    /*
    knex.select('*').from('conservation_statuses')
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
    */
    return JSON.stringify({
        data: CONSERVATION_STATUSES,
        message: 'OK'
    });
}

module.exports = {
    list
}