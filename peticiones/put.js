var knex = require('../db/knex')

module.exports = {
    //editLibro,
    alquilarLibro,
    devolverLibro,
    cambiarEstado
};

function editLibro(req, res){
    
}

function alquilarLibro(req, res){
    knex('libros').where('id_libro', req.params.id)
        .update({
            estado: req.body.estado
        })
        .then( () => {
            knex.select()
                .from('libros')
                .then( libros => res.send(libros) );
        })
}

function devolverLibro(req, res){
    knex('prestamos').where('id_prestamo', req.params.id)
        .update({
            fecha_devolucion: req.body.fecha_devolucion
        })
        .then( () => {
            knex.select()
                .from('prestamos')
                .then( prestamos => res.send(prestamos) );
        })
}

function cambiarEstado(req, res){
    knex('libros').where('id_libro', req.params.id)
        .update({
            estado: req.body.estado
        })
        .then( () => {
            knex.select()
                .from('libros')
                .then( libros => res.send(libros) );
        })
}