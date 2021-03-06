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
            return reject(
                JSON.stringify({
                    data: null,
                    message: '[Error]: The ID param is undefined'
                })
            );
        }

        resolve(STORE.index(id));
    }); 
}

// Save a new book
function addBook(book){
    return new Promise((resolve, reject) => {
        if (!book) {
            return reject(
                JSON.stringify({
                    data: null,
                    message: '[Error]: The book is undefined'
                })
            );
        }
        
        resolve(STORE.save(book));
    }); 
}

// Edit a specific book by ID
function updateBook(id, book){
    return new Promise((resolve, reject) => {
        if (!id) {
            return reject(
                JSON.stringify({
                    data: null,
                    message: '[Error]: The ID param is undefined'
                })
            );
        }

        if (!book) {
            return reject(
                JSON.stringify({
                    data: null,
                    message: '[Error]: The book is undefined'
                })
            );
        }

        resolve(STORE.edit(id, book));
    }); 
}

// Delete a specific book by id
function deleteBook(id){
    return new Promise((resolve, reject) => {
        if (!id) {
            return reject(
                JSON.stringify({
                    data: null,
                    message: '[Error]: The ID param is undefined'
                })
            );
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