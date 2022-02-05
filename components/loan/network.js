const EXPRESS = require('express');
const CONTROLLER = require('./controller');
const ROUTER = EXPRESS.Router();

// GET loans
ROUTER.get('/', function(req, res) {
    CONTROLLER.getLoans()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(error => {
        res.status(500).send(error);
    });
});

// GET loan
ROUTER.get('/:id', function(req, res) {
    CONTROLLER.getLoanById(req.params.id)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(error => {
        res.status(400).send(error);
    });
});

// POST loan
ROUTER.post('/', function(req, res) {
    CONTROLLER.addLoan(req.body.loan)
    .then(data => {
        res.status(201).send(data);
    })
    .catch(error => {
        res.status(400).send(error);
    });
});

// PUT loan
ROUTER.put('/:id', function(req, res) {
    CONTROLLER.updateLoan(req.params.id, req.body.loan)
    .then(data => {
        res.status(201).send(data);
    })
    .catch(error => {
        res.status(400).send(error);
    });
});

// DELETE loan
ROUTER.delete('/:id', function(req, res) {
    CONTROLLER.deleteLoan(req.params.id)
    .then(data => {
        res.status(201).send(data);
    })
    .catch(error => {
        res.status(400).send(error);
    });
});

/* 
app.get('/registro-entrada/:desde', getBook.getRegistrosEntrada);
app.get('/registro-existente/:desde', getBook.getRegistrosExistentes);

app.put('/alquilar-libro/:id', putBook.alquilarLibro);
*/

module.exports = ROUTER;