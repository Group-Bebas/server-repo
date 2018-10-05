const route = require('express').Router()
const UserController = require('../controllers/userController')
const isLogin = require('../middleware/isLogin')

route
  .get('/', isLogin, UserController.getDatauser)
  .put('/', isLogin, UserController.update)
  .delete('/', isLogin, UserController.delete)

module.exports = route