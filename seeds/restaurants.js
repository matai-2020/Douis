exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurants').insert([
        { id: 1, name: 'Selera', rating: 4.1, lat: -36.867590, long: 174.777170, price_range: 'Cheap', image: 'selera.png', type: 'Malaysian' },
        { id: 2, name: 'Boulcott Street Bistro', rating: 4.6, lat: -41.2862221, long: 174.7717339, price_range: 'Bring ya cash cash money honey', image: 'boulcott-street-bistro-logo.png', type: 'Bistro' },
        { id: 3, name: 'Ajisen Ramen', rating: 4.5, lat: -36.8667617, long: 174.7741317, price_range: 'Average', image: 'ajisen-ramen.png', type: 'Japanese' },
        { id: 4, name: 'Little & Friday', rating: 4.1, lat: -36.8667617, long: 174.7741317, price_range: 'Average', image: 'little-and-friday-newmarket.png', type: 'Cafe' },
        { id: 5, name: 'Tucks & Bao', rating: 3.9, lat: -36.8661287, long: 174.7767065, price_range: 'Average', image: 'tucks-and-bao.png', type: 'Asian Fusion' },
        { id: 6, name: 'Black Box Pizza Newmarket', rating: 2.8, lat: -36.8655718, long: 174.777946, price_range: 'Cheap', image: 'black-box-pizza.png', type: 'Pizza' }
      ])
    })
}
