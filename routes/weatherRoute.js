const route = require('express').Router()
const WeatherController = require('../controllers/weatherController')
const isLogin = require('../middleware/isLogin')

route.post('/', isLogin, WeatherController.getWeather)

module.exports = route