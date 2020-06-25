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
router.post('/', (req, res) => {

})

module.exports = router