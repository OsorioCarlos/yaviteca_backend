const KNEX = require('../../db/knex');

// Return books from list of books
function list() {
    KNEX.select('*').from('books')
    .join('conservation_statuses', 'books.conservation_status_id', '=', 'conservation_statuses.id')
    .join('states', 'books.states_id', '=', 'states.id')
    .where('books.is_deleted', false)
    .then(books => {
        return JSON.stringify({
            data: books,
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

// Return a book by id from list of books
function index(id) {
    KNEX.select('*').from('books')
    .join('conservation_statuses', 'books.conservation_status_id', '=', 'conservation_statuses.id')
    .join('states', 'books.states_id', '=', 'states.id')
    .where('books.is_deleted', false)
    .where('book.id', id)
    .then(book => {
        return JSON.stringify({
            data: book,
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

// Add a new book in a list of books
function save(book) {
    KNEX('books').insert(book)
    .then(() => {
        return JSON.stringify({
            data: book,
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

// Update a book from list of books
function edit(id, book) {
    KNEX('books').where('id', id).update(book)
    .then(() => {
        return JSON.stringify({
            data: book,
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

// Delete a book from list of books
function remove(id) {
    KNEX('books').where('id', id)
    .update({is_deleted: true})
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