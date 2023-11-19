// app.js

const express = require('express')
const sls = require('serverless-http')
const app = express()
app.get('/', async (req, res, next) => {
  res.status(200).send('Hello World!')
})
module.exports.server = sls(app)

// sls config credentials --provider aws --key AKIASEZJPDXTQ4SLVKWV --secret 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