'use strict'

const router = require('express').Router()
const RecipeController = require('../controllers/recipeController')
const isLogin = require('../middleware/isLogin')

// get category
router.get('/category', RecipeController.getCategory)
      .post('/listbycategory', RecipeController.listByCategory)
      .post('/detail', RecipeController.getDetailRecipe)
      .get('/random', RecipeController.getRandomRecipe)
      .post('/search', RecipeController.searchByKeyword)


module.exports = router