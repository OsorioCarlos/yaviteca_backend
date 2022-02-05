
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('states').del()
    .then(function () {
      // Inserts seed entries
      return knex('states').insert([
        {name: 'Disponible'},
        {name: 'No Disponible'}
      ]);
    });
};
