
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('conservation_statuses').del()
    .then(function () {
      // Inserts seed entries
      return knex('conservation_statuses').insert([
        {name: 'Buen Estado'},
        {name: 'Regular'},
        {name: 'Mal Estado'}
      ]);
    });
};
