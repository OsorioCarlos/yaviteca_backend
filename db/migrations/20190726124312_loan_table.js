
exports.up = function(knex) {
    return knex.schema
    .createTable('loans', function(table){
        table.increments('id');
        table.string('username', 200).notNullable();
        table.integer('book_id').notNullable();
        table.date('rental_date').notNullable();
        table.date('maximum_return_date').notNullable();
        table.date('return_date');
        table.boolean('is_deleted').defaultTo(false).notNullable();
        table.foreign('book_id').references('id').inTable('books');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('loans')
};
