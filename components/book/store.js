//const KNEX = require('../../db/knex');

// Mock database
const BOOKS = [];

// Return books from list of books
function list() {
    /*
    knex.select('*').from('books')
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
    */
    return JSON.stringify({
        data: BOOKS,
        message: 'OK'
    });
}

// Return a book by id from list of books
function index(id) {
    /*
    knex.select('*').from('books')
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
    */
    return JSON.stringify({
        data: BOOKS[id],
        message: 'OK'
    });
}

// Add a new book in a list of books
function save(book) {
    /*
    knex('books').insert(book)
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
    */
    BOOKS.push(book);
    return JSON.stringify({
        data: book,
        message: 'OK'
    });
}

// Update a book from list of books
function edit(id, book) {
    /*
    knex('books').where('id', id).update(book)
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
    */
   BOOKS[id] = book;
   return JSON.stringify({
        data: book,
        message: 'OK'
    });
}

// Delete a book from list of books
function remove(id) {
    /*
    knex('books').where('id', id)
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
    */
    BOOKS[id] = {};
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