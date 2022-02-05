const STORE = require('./store');

// Get all books
function getBooks(){
    return new Promise((resolve, reject) => {
        resolve(STORE.list());
    }); 
}

// Get a book by specific ID
function getBookById(id){
    return new Promise((resolve, reject) => {
        if (!id) {
            return reject(`[Error in Book(controller)]: There is not id; id value ${id}`)
        }
        resolve(STORE.index(id));
    }); 
}

// Save a new book
function addBook(book){
    return new Promise((resolve, reject) => {
        if (!book) {
            return reject(`[Error in Book(controller)]: There is not book; book is ${id}`)
        }
        resolve(STORE.save(book));
    }); 
}

// Edit a specific book by ID
function updateBook(id, book){
    return new Promise((resolve, reject) => {
        if (!id || !book) {
            return reject(`[Error in Book(controller)]: There are not id or book; id value ${id}, book is ${book}`)
        }
        resolve(STORE.edit(id, book));
    }); 
}

// Delete a specific book by id
function deleteBook(id){
    return new Promise((resolve, reject) => {
        if (!id) {
            return reject(`[Error in Book(controller)]: There is not id; id value: ${id}`)
        }
        resolve(STORE.remove(id));
    }); 
}

module.exports = {
    getBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook
}