var knex = require('../db/knex')

module.exports = {
    //addLibro,
    registrarAlquiler
};

function addLibro(req, res){
    
}

function registrarAlquiler(req, res){
    knex('prestamos').insert({
        nombre_usuario: req.body.nombre_usuario,
        libro: req.body.libro,
        fecha_alquiler: req.body.fecha_alquiler,
        fecha_maxima_devolucion: req.body.fecha_maxima_devolucion,
        fecha_devolucion: null
    }).then( () => {
        knex.select()
            .from('prestamos')
            .then( prestamos => res.send(prestamos) );
    })
}