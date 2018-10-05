'use strict'

const router = require('express').Router()
const RecipeController = require('../controllers/recipeController')
const isLogin = require('../middleware/isLogin')

// get category
router.get('/category', isLogin, RecipeController.getCategory)
      .post('/listbycategory', isLogin, RecipeController.listByCategory)
      .post('/detail', isLogin, RecipeController.getDetailRecipe)
      .get('/random', isLogin, RecipeController.getRandomRecipe)
      .post('/search', isLogin, RecipeController.searchByKeyword)


module.exports = router