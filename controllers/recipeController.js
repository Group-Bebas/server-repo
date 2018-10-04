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
}

module.exports = RecipeController