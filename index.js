const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const xss = require('xss-clean')

const router = require('./src/routers')
const { APP_PORT } = require('./src/helpers/env')

const app = express();
app.use(cors())
app.use(helmet())
app.use(xss())
app.use(bodyParser.json())
app.use(router)

const PORT = APP_PORT || 3000
app.listen(PORT, () => {
  console.log(`service running at port ${PORT}`)
})