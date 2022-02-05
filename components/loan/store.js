//const KNEX = require('../../db/knex');

// Mock database
const LOANS = [];

// Return loans from list of loans
function list() {
    /*
    knex.select('*').from('loans')
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
        });
    */
    return JSON.stringify({
        data: LOANS,
        message: 'OK'
    });
}

// Return a loan by id from list of loans
function index(id) {
    /*
    knex.select('*').from('loans')
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
    */

    return JSON.stringify({
        data: LOANS[id],
        message: 'OK'
    });
}

// Add a new loan in a list of loans
function save(loan) {
    /*
    knex('loans').insert(loan)
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
    */
    LOANS.push(loan);
    return JSON.stringify({
        data: loan,
        message: 'OK'
    });
}

// Update a loan from list of loans
function edit(id, loan) {
    /*
    knex('loans').where('id', id).update(loan)
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
    */
    LOANS[id] = loan;
    return JSON.stringify({
        data: loan,
        message: 'OK'
    });
}

// Delete a loan from list of loans
function remove(id) {
    /*
     knex('loans').where('id', id)
        .update({
            return_date: '2022/02/05',
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
    */
    LOANS[id] = {};
    return JSON.stringify({
        data: null,
        message: 'OK'
    });
}

module.exports = {
    list,
    index,
    save,
    edit,
    remove
}