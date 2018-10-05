const route = require('express').Router()
const SignUpController = require('../controllers/signUpController')
const isLogin = require('../middleware/isLogin')

route.post('/', isLogin, SignUpController.signUp)

module.exports = route