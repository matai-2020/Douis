exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurants').insert([
        { id: 1, name: 'Selera', rating: 4.1, lat: -36.8675598, long: 174.7773246, price_range: 'Cheap', image: 'selera.png', type: 'Malaysian', description: 'Authentic malaysian street food suitable for kids and adults alike - be careful though! We like it hot!' },
        { id: 2, name: 'Boulcott Street Bistro', rating: 4.6, lat: -41.2862221, long: 174.7717339, price_range: 'Bring ya cash cash money honey', image: 'boulcott-street-bistro-logo.png', type: 'Bistro', description: 'Fine dining suitable for even the most luxerious! Settled in the cutest - and only - Victorian cottage in Wellington, we give you a setting for romance, celebrations and casual fine dining' },
        { id: 3, name: 'Ajisen Ramen', rating: 4.5, lat: -36.8667617, long: 174.7741317, price_range: 'Average', image: 'ajisen-ramen.png', type: 'Japanese', description: 'Looking for the best ramen in town? Look no further! Ajisen Ramen serves up the most deliciours bowls of heaven' },
        { id: 4, name: 'Little & Friday', rating: 4.1, lat: -36.8667617, long: 174.7741317, price_range: 'Average', image: 'little-and-friday-newmarket.png', type: 'Cafe', decription: 'Have your mum been asking you to go out for the last 4 weeks, and need to make it up to her? Little & Friday will give you the perfect setting for a cuppa on a rainy saturday' },
        { id: 5, name: 'Tucks & Bao', rating: 3.9, lat: -36.8661287, long: 174.7767065, price_range: 'Average', image: 'tucks-and-bao.png', type: 'Asian Fusion', description: 'Your fusion for your asian heart (aka. your belly) - we combine tast street-food inspired dishes from Asia & around the world' },
        { id: 6, name: 'Black Box Pizza Newmarket', rating: 2.8, lat: -36.8655718, long: 174.777946, price_range: 'Cheap', image: 'black-box-pizza.png', type: 'Pizza', description: 'Your local artisan pizzaria - we guarentee to satisfy your hunger (do not worry about the cockroaches)' }
      ])
    })
}
