
exports.up = function(knex) {
  return knex.schema.table('restaurants', table => {
    table.string('type')
  })
}

exports.down = function(knex) {
  return knex.schema.table('restaurants', table => {
    table.dropColumn('type')
})
}
