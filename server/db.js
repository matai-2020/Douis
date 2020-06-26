const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getData,
  addRest,
  updateRes
}

function getData (db = connection) {
  return db('restaurants').select()
}

function addRest (restaurant, db = connection) {
  return db('restaurants')
    .insert({
      name: restaurant.name,
      rating: restaurant.rating,
      lat: restaurant.lat,
      long: restaurant.long,
      price_range: restaurant.priceRange,
      image: restaurant.image,
      type: restaurant.type
    })
    .then((ids) => {
      return {
        id: ids[0],
        ...restaurant
      }
    })
}

function updateRes (restaurant, id, db = connection) {
  return db('restaurants')
    .where('id', id)
    .update(
      { name: restaurant.name,
        rating: restaurant.rating,
        lat: restaurant.lat,
        long: restaurant.long,
        price_range: restaurant.priceRange,
        image: restaurant.image,
        type: restaurant.type
      }
    )
}
