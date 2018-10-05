const route = require('express').Router()
const MatrixController = require('../controllers/MatrixController')

route.post('/', MatrixController.getDistance)

module.exports = route