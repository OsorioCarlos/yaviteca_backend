const STORE = require('./store');

// Get all conservation statuses
function getStates(){
    return new Promise((resolve, reject) => {
        resolve(STORE.list());
    }); 
}

module.exports = {
    getStates
}