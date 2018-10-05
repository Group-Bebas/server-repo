const route = require('express').Router()
const SignUpController = require('../controllers/signUpController')
// const isLogin = require('../middleware/isLogin')

route.post('/', SignUpController.signUp)

module.exports = route