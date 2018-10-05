const route = require('express').Router()
const WeatherController = require('../controllers/weatherController')

route.post('/', WeatherController.getWeather)

module.exports = route