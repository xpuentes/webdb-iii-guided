// we want a users table
// with a primary key
// and a name field (required, not necessarly unique)

// create and write a migration file
// run the migration

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl.string('name', 128)
      .notNullable();

      tbl.integer('role_id')
        .unsigned()
        .references('id')
        .inTable('roles')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
