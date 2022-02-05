const STORE = require('./store');

// Get all conservation statuses
function getConservationStatuses(){
    return new Promise((resolve, reject) => {
        resolve(STORE.list());
    }); 
}

module.exports = {
    getConservationStatuses
}