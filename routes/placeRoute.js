const route = require('express').Router()
const PlaceController = require('../controllers/PlaceController')
const isLogin = require('../middleware/isLogin')

route.get('/:place/:lat/:lng', isLogin, PlaceController.getNearbyPlace)

module.exports = route