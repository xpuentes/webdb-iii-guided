
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'steve', role_id: 1},
        {name: 'tony', role_id: 2},
        {name: 'bruce', role_id: 1}
      ]);
    });
};
