var knex = require('../db/knex')

module.exports = {
    //editLibro,
    alquilarLibro,
    //devolverLibro,
    //cambiarEstado
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
   
}