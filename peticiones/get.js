var knex = require('../db/knex')
var hasta = new Date();

module.exports = {
    //getLibros,
    //getLibro,
    getEstadoConservacion,
    getLibroAlquilado,
    getLibrosDisponibles,
    getRegistrosEntrada,
    getRegistrosExistentes,
    getRegistrosSalida
};



function getEstadoConservacion(req, res){
    knex.select()
        .from('estados_conservacion')
        .then( estados_conservacion => res.send(estados_conservacion) );
}

function getLibroAlquilado(req, res){
    knex.select('id_prestamo', 'nombre_usuario', 'libros.id_libro', 'libros.nombre', 'fecha_alquiler', 'fecha_maxima_devolucion', 'fecha_devolucion')
        .from('prestamos')
        .join('libros', 'libros.id_libro', '=', 'prestamos.libro')
        .whereNull('prestamos.fecha_devolucion')
        .then( prestamos => res.send(prestamos) );
}

function getLibro(req, res){
    
}

function getLibrosDisponibles(req, res){
    knex.select()
        .from('libros')
        .where('estado', 1)
        .then(libros => res.send(libros));
}

function getRegistrosEntrada(req, res){
    knex.select('nombre', 'fecha_creacion')
        .count('nombre')
        .from('libros')
        .whereBetween('fecha_creacion', [req.params.desde, hasta])
        .where('estado', 1)
        .where('eliminado', 1)
        .groupBy('nombre')
        .groupBy('fecha_creacion')
        .then(libros => res.send(libros));
}

function getRegistrosExistentes(req, res){
    knex.select('nombre', 'fecha_creacion')
        .count('nombre')
        .from('libros')
        .whereNotBetween('fecha_creacion', [req.params.desde, hasta])
        .where('estado', 1)
        .where('eliminado', 1)
        .groupBy('nombre')
        .groupBy('fecha_creacion')
        .then(libros => res.send(libros));
}

function getRegistrosSalida(req, res){
    knex.select('libros.nombre', 'prestamos.fecha_alquiler')
        .count('libros.nombre')
        .from('prestamos')
        .join('libros', 'libros.id_libro', '=', 'prestamos.libro')
        .groupBy('libros.nombre')
        .groupBy('prestamos.fecha_alquiler')
        .then(prestamos => res.send(prestamos))
}