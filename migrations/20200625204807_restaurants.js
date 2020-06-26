// runs with knex migrate:latest
exports.up = function (knex) {
  return knex.schema.createTable('restaurants', table => {
    table.increments('id')
    table.string('name')
    table.decimal('rating')
    table.decimal('lat', 15, 10)
    table.decimal('long', 15, 10)
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
