exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tipees')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('tippees').insert([{ first_name: 'kai' }]);
    });
};
