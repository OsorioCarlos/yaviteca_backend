//const KNEX = require('../../db/knex');

// Mock database
const BOOKS = [];

// Return books from list of books
function list() {
    /*
    knex.select('id_libro', 'codigo_isbn', 'nombre', 'editorial', 'autor', 'fecha_publicacion',
                    'genero', 'estados_conservacion.nombre_estado_conservacion', 'estados.nombre_estado')
            .from('libros')
            .join('estados_conservacion', 'libros.estado_conservacion', '=',
                'estados_conservacion.id_estado_conservacion')
            .join('estados', 'libros.estado', '=', 'estados.id_estado')
            .where('eliminado', 1)
            .then( libros => res.send(libros) );
    */
    return BOOKS;
}

// Return a book by id from list of books
function index(id) {
    /*
    knex.select('id_libro', 'codigo_isbn', 'nombre', 'editorial', 'autor', 'fecha_publicacion', 'genero',
                'estados_conservacion.nombre_estado_conservacion', 'estados.nombre_estado', 'eliminado')
        .from('libros')
        .join('estados_conservacion', 'libros.estado_conservacion', '=',
            'estados_conservacion.id_estado_conservacion')
        .join('estados', 'libros.estado', '=', 'estados.id_estado')
        .where('eliminado', 1)
        .where('id_libro', req.params.id)
        .then(libros => res.send(libros));
    */
    return BOOKS[id];
}

// Add a new book in a list of books
function save(book) {
    /*
    knex('libros').insert({
        codigo_isbn: req.body.codigo_isbn,
        nombre: req.body.nombre,
        editorial: req.body.editorial,
        autor: req.body.autor,
        fecha_publicacion: req.body.fecha_publicacion,
        genero: req.body.genero,
        estado_conservacion: req.body.estado_conservacion,
        estado: req.body.estado,
        eliminado: req.body.eliminado,
        fecha_creacion: req.body.fecha_creacion
    }).then( () => {
        knex.select('id_libro', 'codigo_isbn', 'nombre', 'editorial', 'autor', 'fecha_publicacion',
                'genero', 'estados_conservacion.nombre_estado_conservacion', 'estados.nombre_estado')
            .from('libros')
            .join('estados_conservacion', 'libros.estado_conservacion', '=',
            'estados_conservacion.id_estado_conservacion')
            .join('estados', 'libros.estado', '=', 'estados.id_estado')
            .where('eliminado', 1)
            .then( libros => res.send(libros) );
    })
    */
    BOOKS.push(book);
    return book;
}

// Update a book from list of books
function edit(id, book) {
    /*
        knex('libros').where('id_libro', req.params.id)
        .update({
            nombre: req.body.nombre,
            editorial: req.body.editorial,
            autor: req.body.autor,
            fecha_publicacion: req.body.fecha_publicacion,
            genero: req.body.genero,
            estado_conservacion: req.body.estado_conservacion,
            estado: req.body.estado
        })
        .then( () => {
            knex.select()
                .from('libros')
                .then( libros => res.send(libros) );
        })
    */
   BOOKS[id] = book;
   return book;
}

// Delete a book from list of books
function remove(id) {
    /*
    knex('libros').where('id_libro', req.params.id)
        .update({
            eliminado: req.body.eliminado
        })
        .then( () => {
            knex.select()
                .from('libros')
                .then( libros => res.send(libros) );
        })
    */
    BOOKS[id] = null;
    return BOOKS[id];
}

module.exports = {
    list,
    index,
    save,
    edit,
    remove
}