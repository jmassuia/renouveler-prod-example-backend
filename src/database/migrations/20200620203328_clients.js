
exports.up = function(knex) {
  return knex.schema.createTable('clients',(table)=>{
    table.increments('id');
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('phone').notNullable();
    table.string('date').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('clients');
};
