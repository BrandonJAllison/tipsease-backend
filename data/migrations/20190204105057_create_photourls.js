exports.up = function(knex, Promise) {
  return knex.schema.createTable('photos', tbl => {
    //primary key: id (autoincre)
    tbl.increments();

    //photo urls

    tbl.string('photo_url').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('photos');
};
