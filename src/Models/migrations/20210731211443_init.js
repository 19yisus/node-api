
exports.up = function(knex) {
  return knex.schema.
  createTable('person', table => {
    table.increments('id')
    table.string('name').notNullable().unique()
    table.timestamps()
  })
  .createTable('movies', table => {
    table.increments('id').primary()
    table.string('title', 30).notNullable()
    table.string('link', 100).notNullable()
    table.string('img', 100).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('person').dropTable('movies')
};
