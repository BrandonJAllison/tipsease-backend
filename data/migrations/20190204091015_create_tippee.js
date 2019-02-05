exports.up = function(knex, Promise) {
  return knex.schema.createTable('tippees', tbl => {
    // primary key: id (autoincrements)
    tbl.increments();
    // other keys

    tbl
      .string('first_name')

      .notNullable();
    tbl.string('last_name').notNullable();
    tbl.integer('photo_url_id');

    tbl.date('start_date');

    tbl.string('email').notNullable();
    tbl.text('tagline'); //optional
    tbl.string('password').notNullable();
    tbl.string('qr_url'); //optional
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tippees');
};
