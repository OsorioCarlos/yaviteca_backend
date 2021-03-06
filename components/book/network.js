const EXPRESS = require('express');
const CONTROLLER = require('./controller');
const ROUTER = EXPRESS.Router();

// GET books
ROUTER.get('/', function(req, res) {
    CONTROLLER.getBooks()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(error => {
        res.status(500).send(error);
    });
});

// GET book
ROUTER.get('/:id', function(req, res) {
    CONTROLLER.getBookById(req.params.id)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(error => {
        res.status(400).send(error);
    });
});

// POST book
ROUTER.post('/', function(req, res) {
    CONTROLLER.addBook(req.body.book)
    .then(data => {
        res.status(201).send(data);
    })
    .catch(error => {
        res.status(400).send(error);
    });
});

// PUT book
ROUTER.put('/:id', function(req, res) {
    CONTROLLER.updateBook(req.params.id, req.body.book)
    .then(data => {
        res.status(201).send(data);
    })
    .catch(error => {
        res.status(400).send(error);
    });
});

// DELETE book
ROUTER.delete('/:id', function(req, res) {
    CONTROLLER.deleteBook(req.params.id)
    .then(data => {
        res.status(201).send(data);
    })
    .catch(error => {
        res.status(400).send(error);
    });
});

module.exports = ROUTER;