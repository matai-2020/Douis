exports.up = function (knex) {
  return knex.schema.table('restaurants', table => {
    table.string('description')
  })
}

exports.down = function (knex) {
  return knex.schema.table('restaurants', table => {
    table.dropColumn('description')
  })
}
