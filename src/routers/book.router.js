const router = require('express').Router()
const { store } = require('../controllers/book.controller')

router
  .post('/', store)

module.exports = router