const axios = require('axios')

class PlaceController {

  static getNearbyPlace (req, res) {
    let query = {
      loc1: 'mall',
      loc2: 'bar',
      loc3: 'beauty_salon',
      loc4: 'book_store',
      loc5: 'cafe',
      loc6: 'library',
      loc7: 'movie_theater',
      loc8: 'museum',
      loc9: 'night_club',
      loc10: 'park',
      loc11: 'shopping_mall',
      loc12: 'spa',
      loc13: 'store',
      loc14: 'supermarket',
      loc15: 'zoo'
    }
    // let query = req.params.place
    let lat = req.params.lat
    let lng = req.params.lng
    axios({
      url: `https://maps.googleapis.com/maps/api/place/textsearch/json?location=${lat},${lng}&radius=1500&query=${query.loc1}&key=${process.env.API_KEY_GOOGLE3}`,
      method: 'get'
    })
      .then(data => {
        let results = data.data
        res.status(200).json({
          status: 'success',
          data: results 
        })
      })
      .catch(err => {
        res.status(500).json({
          status: 'failed',
          message: err.message
        })
      })
  }

}

module.exports =PlaceController