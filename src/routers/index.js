const router = require('express').Router()
const userRouter = require('./user.router')
const bookRouter = require('./book.router')

router
.get('/', (req, res) => {
  res.send('<h1>It Works</h1>')
})
.use('/user', userRouter)
.use('/book', bookRouter)

module.exports = router