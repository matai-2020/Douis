// runs with knex migrate:latest
exports.up = function (knex) {
  return knex.schema.createTable('restaurants', table => {
    table.increments('id')
    table.string('name')
    table.string('rating')
    table.string('lat')
    table.string('long')
    table.string('price_range')
    table.string('image')
  })
}

// runs with knex migrate:rollback
exports.down = function (knex) {
  exports.down = function (knex) {
    return knex.schema.dropTable('restaurants')
  }
}
