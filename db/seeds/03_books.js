exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('libros').del()
    .then(function () {
      // Inserts seed entries
      return knex('libros').insert([
        {isbn: 9788425223280, name: 'Fundamentos de programación con JS', editorial: 'Don Bosco', author: 'Xavier Lugo', genre: 'Programación', conservation_status_id: 2, state_id: 1, creation_date: '2019-07-11'},
        {isbn: 9889435324291, name: 'Programación con Java', editorial: 'Don Bosco', author: 'Xavier Lugo', genre: 'Programación', conservation_status_id: 2, state_id: 1, creation_date: '2019-07-11'},
        {isbn: 9687415122299, name: 'Geometría Analítica de Lheman', editorial: 'PLA', author: 'Charles Lheman', genre: 'Matemáticas', conservation_status_id: 1, state_id: 1, creation_date: '2019-07-11'},
        {isbn: 9990445425302, name: 'Gastronomía para la alta cocina', editorial: 'PLA', author: 'Jhon Gustov', genre: 'Cocina', conservation_status_id: 2, state_id: 1, creation_date: '2019-07-11'},
        {isbn: 9586405021268, name: 'Cocina clásica ecuatoriana', editorial: 'Buena Lectura', author: 'Doña Petrona', genre: 'Cocina', conservation_status_id: 1, state_id: 1, creation_date: '2019-07-11'},
        {isbn: 1009145552531, name: 'Álgebra de Baldor', editorial: 'Mi libro', author: 'Baldor', genre: 'Matemáticas', conservation_status_id: 3, state_id: 1, creation_date: '2019-07-11'},
        {isbn: 9485394920257, name: 'Comunismo en la sociedad', editorial: 'Buena Lectura', author: 'Karl Marx', genre: 'Política', conservation_status_id: 1, state_id: 1, creation_date: '2019-07-11'},
        {isbn: 1019246562732, name: 'Tutorial de Python', editorial: 'Buena Lectura', author: 'Guido van Rossum', genre: 'Programación', conservation_status_id: 1, state_id: 1, creation_date: '2019-07-11'},
        {isbn: 9384384819246, name: 'Contabilidad básica', editorial: 'Don Bosco', author: 'Luis Quinaloa', genre: 'Economía', conservation_status_id: 1, state_id: 1, creation_date: '2019-07-11'},
        {isbn: 1029347572833, name: 'Diseño de alta costura', editorial: 'Don Bosco', author: 'Anónimo', genre: 'Modas', conservation_status_id: 1, state_id: 1, creation_date: '2019-07-11'}
      ]);
    });
};
