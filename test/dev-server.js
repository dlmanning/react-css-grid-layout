'use strict'

// const path = require('path')
const express = require('express')
const webpack = require('webpack')
const ecstatic = require('ecstatic')
const config = require('../webpack.config.js')

const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'test', 'index.html'))
// })

app.use(ecstatic({ root: __dirname, cache: 0 }))

app.listen(8080, 'localhost', function (err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:8080')
})
