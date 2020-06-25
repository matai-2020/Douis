const path = require('path')
const express = require('express')
const routes = require('./routes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1', routes)
server.use('/api/v1/*', (req, res) => res.sendStatus(404))

module.exports = server
