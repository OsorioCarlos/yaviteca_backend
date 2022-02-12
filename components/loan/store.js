const KNEX = require('../../db/knex');

// Return loans from list of loans
function list() {

    KNEX.select('*').from('loans')
    .join('books', 'books.id', '=', 'loans.book_id')
    .where('loans.is_deleted', false)
    .whereNull('loans.return_date')
    .then(loans => {
        return JSON.stringify({
            data: loans,
            message: 'OK'
        });
    })
    .catch(error => {
        return JSON.stringify({
            data: null,
            message: error
        });
    })
}

// Return a loan by id from list of loans
function index(id) {
    KNEX.select('*').from('loans')
    .join('books', 'books.id', '=', 'loans.book_id')
    .where('loans.is_deleted', false)
    .where('loans.id', id)
    .then(loan => {
        return JSON.stringify({
            data: loan,
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

// Add a new loan in a list of loans
function save(loan) {
    KNEX('loans').insert(loan)
    .then(() => {
        return JSON.stringify({
            data: loan,
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

// Update a loan from list of loans
function edit(id, loan) {
    KNEX('loans').where('id', id).update(loan)
    .then(() => {
        return JSON.stringify({
            data: loan,
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

// Delete a loan from list of loans
function remove(id) {
    KNEX('loans').where('id', id)
    .update({
        return_date: new Date(),
        is_deleted: true
    })
    .then(() => {
        return JSON.stringify({
            data: null,
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
    list,
    index,
    save,
    edit,
    remove
}