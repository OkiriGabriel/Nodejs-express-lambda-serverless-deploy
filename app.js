// app.js

const express = require('express')
const sls = require('serverless-http')
const app = express()
app.get('/', async (req, res, next) => {
  res.status(200).send('Hello World!')
})
module.exports.server = sls(app)

// sls config credentials --provider aws --key xxxxxxxx --secret xxxxxxxxx+bSpDC0eX
