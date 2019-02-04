exports.up = function(knex, Promise) {
  return knex.schema.createTable('companiestippees', tbl => {
    // primary key: id (autoincrements)
    tbl.increments();
    // other keys

    tbl.integer('company_id').notNullable();
    tbl.integer('tipee_id').notNullable();
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('companiestippees');
};
