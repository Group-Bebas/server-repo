const route = require('express').Router()
const PlaceController = require('../controllers/PlaceController')

route.get('/:place/:lat/:lng', PlaceController.getNearbyPlace)

module.exports = route