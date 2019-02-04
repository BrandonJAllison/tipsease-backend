exports.up = function(knex, Promise) {
  return knex.schema.createTable('tippers', tbl => {
    // primary key: id (autoincrements)
    tbl.increments();
    // other keys

    tbl
      .string('name')
      .unique()
      .notNullable();
    tbl.string('photo_url');
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
