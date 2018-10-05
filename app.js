'use strict'
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const db = mongoose.connection

mongoose.set('useCreateIndex', true)
mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true })

const placeRoute = require('./routes/placeRoute')
const signUpRoute = require('./routes/signUpRoute')
const loginRoute = require('./routes/loginRoute')
const matrixRoute = require('./routes/matrixRoute')
const weatherRoute = require('./routes/weatherRoute')
const restoRoute = require('./routes/restoRoute')
const recipeRoute = require('./routes/recipeRoute')

app
  .use(cors())
  .use(express.urlencoded({extended:false}))
  .use(express.json())

  .use('/register', signUpRoute)
  .use('/login', loginRoute)
  .use('/place', placeRoute)
  .use('/matrix/distance', matrixRoute)
  .use('/weather', weatherRoute)
  .use('/restaurant', restoRoute)
  .use('/recipes', recipeRoute)
  .get('/', (req, res) => {
    res.status(200).json({
      message: 'Server is On'
    })
  })

  .listen(port, () => {
    console.log(`\n> Server Listening to port ${port}`)
  })

db
  .on('error', console.error.bind(console, 'connection error:'))
  .once('open', function() {
    console.log('> DB Connected')
  })
