'use strict'

const router = require('express').Router()
const RecipeController = require('../controllers/recipeController')

// get category
router.get('/category', RecipeController.getCategory)
      .post('/listbycategory', RecipeController.listByCategory)
      .post('/detail', RecipeController.getDetailRecipe)
      .get('/random', RecipeController.getRandomRecipe)

module.exports = router