const { response } = require('express');
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
        console.error(`Error in Book(network): ${error}`);
    });
});

// GET book
ROUTER.get('/:id', function(req, res) {
    CONTROLLER.getBookById(req.params.id)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(error => {
        console.error(`Error in Book(network): ${error}`);
    });
});

// POST book
ROUTER.post('/', function(req, res) {
    CONTROLLER.addBook(req.body.book)
    .then(data => {
        res.status(201).send(data);
    })
    .catch(error => {
        console.error(`Error in Book(network): ${error}`);
    });
});

// PUT book
ROUTER.put('/:id', function(req, res) {
    CONTROLLER.updateBook(req.params.id, req.body.book)
    .then(data => {
        res.status(201).send(data);
    })
    .catch(error => {
        console.error(`Error in Book(network): ${error}`);
    });
});

// DELETE book
ROUTER.delete('/:id', function(req, res) {
    CONTROLLER.deleteBook(req.params.id)
    .then(data => {
        res.status(201).send(data);
    })
    .catch(error => {
        console.error(`Error in Book(network): ${error}`);
    });
});

/* 

app.get('/estado-conservacion', getBook.getEstadoConservacion);
app.get('/libro-alquilado', getBook.getLibroAlquilado);
app.get('/libro-disponible', getBook.getLibrosDisponibles);
app.get('/registro-entrada/:desde', getBook.getRegistrosEntrada);
app.get('/registro-existente/:desde', getBook.getRegistrosExistentes);
app.get('/registro-salida', getBook.getRegistrosSalida);

app.post('/prestamo', postBook.registrarAlquiler);

app.put('/alquilar-libro/:id', putBook.alquilarLibro);
app.put('/devolver-libro/:id', putBook.devolverLibro);
app.put('/cambiar-estado/:id', putBook.cambiarEstado);
*/

module.exports = ROUTER;