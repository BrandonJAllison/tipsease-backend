exports.up = function(knex, Promise) {
  return knex.schema.createTable('tips', tbl => {
    // primary key: id (autoincrements)
    tbl.increments();

    //other keys
    tbl.integer('tippee_id').notNullable();
    tbl.integer('tipper_id').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tips');
};
