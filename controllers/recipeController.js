'use strict'

const axios = require('axios')

class RecipeController {

    // get category
    static getCategory(req,res){
        axios({
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/categories.php'
        })
          .then(results=>{
              res.status(200).json({
                  msg: 'List of categories',
                  data: results.data
              })
          })
          .catch(error =>{
              res.status(500).json({
                  msg: 'ERROR: ',error
              })
          })
    }

    // get lists inside the category
    static listByCategory(req,res){
        axios({
            method: 'GET',
            url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${req.body.category}`
        })
          .then(results =>{
              res.status(200).json({
                  msg: `List of recipes by category: ${req.body.category}`,
                  data: results.data
              })
          })
          .catch(error =>{
              res.status(500).json({
                  mgs: 'ERROR ',error
              })
          })
    }

    // get detail recipes
    static getDetailRecipe(req,res){
        axios({
            method: 'GET',
            url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${req.body.mealid}`
        })
          .then(result=>{
              res.status(200).json({
                  msg: 'Detail recipe',
                  data: result.data.meals
              })
          })
          .catch(error=>{
              res.status(500).json({
                  msg: 'ERROR ', error
              })
          })
    }
}

module.exports = RecipeController