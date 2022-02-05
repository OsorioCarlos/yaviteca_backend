const STORE = require('./store');

// Get all loans
function getLoans(){
    return new Promise((resolve, reject) => {
        resolve(STORE.list());
    }); 
}

// Get a loan by specific ID
function getLoanById(id){
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

// Save a new loan
function addLoan(loan){
    return new Promise((resolve, reject) => {
        if (!loan) {
            return reject(
                JSON.stringify({
                    data: null,
                    message: '[Error]: The loan is undefined'
                })
            );
        }
        
        resolve(STORE.save(loan));
    }); 
}

// Edit a specific loan by ID
function updateLoan(id, loan){
    return new Promise((resolve, reject) => {
        if (!id) {
            return reject(
                JSON.stringify({
                    data: null,
                    message: '[Error]: The ID param is undefined'
                })
            );
        }

        if (!loan) {
            return reject(
                JSON.stringify({
                    data: null,
                    message: '[Error]: The loan is undefined'
                })
            );
        }

        resolve(STORE.edit(id, loan));
    }); 
}

// Delete a specific loan by id
function deleteLoan(id){
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
    getLoans,
    getLoanById,
    addLoan,
    updateLoan,
    deleteLoan
}