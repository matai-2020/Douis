const express = require('express')
const router = express.Router()
const db = require('./db')

router.get('/', (req, res) => {
  db.getData()
    .then(restaurants => {
      res.json(restaurants)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// POST  /api/v1/
router.post('/add', (req, res) => {
  const restaurant = req.body
  db.addRest(restaurant)
    .then(newRestaurant => {
      res.json(newRestaurant)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.put('/:id', (req, res) => {
  const id = Number(req.params.id)
  const restaurant = req.body
  db.updateRes(restaurant, id)
    .then(updated => {
      res.json(updated)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
