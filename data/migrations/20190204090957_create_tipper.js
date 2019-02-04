exports.up = function(knex, Promise) {
  return knex.schema.createTable('tippers', tbl => {
    // primary key: id (autoincrements)
    tbl.increments();
    // other keys

    tbl
      .string('first_name')

      .notNullable();
    tbl.string('last_name').notNullable();
    tbl
      .integer('photo_url_id')
      .references('id')
      .inTable('photos')
      .notNullable()
      .unique();
    tbl
      .string('email')
      .notNullable()
      .unique();
    tbl.string('password').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tippers');
};
