var knex = require('../db/knex')
var hasta = new Date();

module.exports = {
    //getLibros,
    //getLibro,
    //getEstadoConservacion,
    //getLibroAlquilado,
    getLibrosDisponibles,
    getRegistrosEntrada,
    getRegistrosExistentes,
    //getRegistrosSalida
};



function getEstadoConservacion(req, res){
    
}

function getLibroAlquilado(req, res){
    
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
    
}