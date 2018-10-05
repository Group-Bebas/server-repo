const route = require('express').Router()
const LoginController = require('../controllers/loginController')

route.post('/',LoginController.loginWeb)
route.get('/google', LoginController.loginGoogle)

module.exports = route