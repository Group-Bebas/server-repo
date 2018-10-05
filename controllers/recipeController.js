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

    // get search
    static searchByKeyword(req,res){
        axios({
            method: 'GET',
            url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${req.body.category}`
        })
          .then(results =>{
            let hasil = results.data.meals
            let sortedArr = []
            let regex = new RegExp(`${req.body.keyword}`,'i');
            hasil.forEach(recipe => {
                if(regex.test(recipe['strMeal'])){
                    sortedArr.push(recipe)
                }
            });
              res.status(200).json({
                  msg: `List of sorted recipes by category: ${req.body.category}`,
                  data: sortedArr
              })
          })
          .catch(error =>{
              res.status(500).json({
                  mgs: 'ERROR ',error
              })
          })
    }

    // get random recipes
    static getRandomRecipe(req,res){
        axios({
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/random.php'
        })
          .then(result =>{
              res.status(200).json({
                  msg: 'Random recipe',
                  data: result.data.meals
              })
          })
          .catch(error =>{
              res.status(500).json({
                  msg: 'ERROR: ',error
              })
          })
    }
}

module.exports = RecipeController