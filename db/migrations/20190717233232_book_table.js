
exports.up = function(knex) {
    return knex.schema
    .createTable('conservation_statuses', function(table){
        table.increments('id');
        table.string('name', 50).notNullable();
    })
    .createTable('states', function(table){
        table.increments('id');
        table.string('name', 50).notNullable();
    })
    .createTable('books', function(table){
        table.increments('id');
        table.string('isbn', 13).notNullable();
        table.string('name', 200).notNullable();
        table.string('editorial', 200).notNullable();
        table.string('author', 200).notNullable();
        table.string('genre', 100).notNullable();
        table.integer('conservation_status_id').notNullable();
        table.integer('state_id').notNullable();
        table.date('creation_date').notNullable();
        table.boolean('is_deleted').defaultTo(false).notNullable();
        table.foreign('conservation_status_id').references('id').inTable('conservation_statuses');
        table.foreign('state_id').references('id').inTable('states');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('books')
                        .dropTable('conservation_statuses')
                        .dropTable('states');
};