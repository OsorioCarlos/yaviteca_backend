const EXPRESS = require('express');
const CONTROLLER = require('./controller');
const ROUTER = EXPRESS.Router();

// GET conservation statuses
ROUTER.get('/', function(req, res) {
    CONTROLLER.getConservationStatuses()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(error => {
        res.status(500).send(error);
    });
});

module.exports = ROUTER;