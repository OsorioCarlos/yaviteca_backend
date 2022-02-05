exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('libros').del()
    .then(function () {
      // Inserts seed entries
      return knex('libros').insert([
        {isbn: 9788425223280, name: 'Fundamentos de programación con JS', editorial: 'Don Bosco', author: 'Xavier Lugo', publication_date: '2008-12-31', genre: 'Programación', conservation_status_id: 2, state_id: 1, creation_date: '2019-07-11'},
        {isbn: 9889435324291, name: 'Programación con Java', editorial: 'Don Bosco', author: 'Xavier Lugo', publication_date: '2008-03-13', genre: 'Programación', conservation_status_id: 2, state_id: 1, creation_date: '2019-07-11'},
        {isbn: 9687415122299, name: 'Geometría Analítica de Lheman', editorial: 'PLA', author: 'Charles Lheman', publication_date: '2013-06-03', genre: 'Matemáticas', conservation_status_id: 1, state_id: 1, creation_date: '2019-07-11'},
        {isbn: 9990445425302, name: 'Gastronomía para la alta cocina', editorial: 'PLA', author: 'Jhon Gustov', publication_date: '2009-09-22', genre: 'Cocina', conservation_status_id: 2, state_id: 1, creation_date: '2019-07-11'},
        {isbn: 9586405021268, name: 'Cocina clásica ecuatoriana', editorial: 'Buena Lectura', author: 'Doña Petrona', publication_date: '2010-04-02', genre: 'Cocina', conservation_status_id: 1, state_id: 1, creation_date: '2019-07-11'},
        {isbn: 1009145552531, name: 'Álgebra de Baldor', editorial: 'Mi libro', author: 'Baldor', publication_date: '2005-07-04', genero: 'Matemáticas', conservation_status_id: 3, state_id: 1, creation_date: '2019-07-11'},
        {isbn: 9485394920257, name: 'Comunismo en la sociedad', editorial: 'Buena Lectura', author: 'Karl Marx', publication_date: '2014-05-29', genre: 'Política', conservation_status_id: 1, state_id: 1, creation_date: '2019-07-11'},
        {isbn: 1019246562732, name: 'Tutorial de Python', editorial: 'Buena Lectura', author: 'Guido van Rossum', publication_date: '2013-01-23', genre: 'Programación', conservation_status_id: 1, state_id: 1, creation_date: '2019-07-11'},
        {isbn: 9384384819246, name: 'Contabilidad básica', editorial: 'Don Bosco', author: 'Luis Quinaloa', publication_date: '2011-11-16', genre: 'Economía', conservation_status_id: 1, state_id: 1, creation_date: '2019-07-11'},
        {isbn: 1029347572833, name: 'Diseño de alta costura', editorial: 'Don Bosco', author: 'Anónimo', publication_date: '2014-05-29', genre: 'Modas', conservation_status_id: 1, state_id: 1, creation_date: '2019-07-11'}
      ]);
    });
};
