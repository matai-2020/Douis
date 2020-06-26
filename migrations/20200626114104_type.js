
exports.up = function(knex) {
  return knex.schema.table('restaurants', table => {
    table.string('kind')
  })
}

exports.down = function(knex) {
  return knex.schema.table('restaurants', table => {
    table.dropColumn('kind')
})
}
