const axios = require('axios')

class MatrixController {

  static getDistance(req, res) {
    let latOrigin = req.body.lat
    let lngOrigin = req.body.lng
    let destination = req.body.destination

    axios({
      url: `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${latOrigin},${lngOrigin}&destinations=${destination}&key=${process.env.API_KEY_GOOGLE3}`,
      method: 'get'
    })
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }

}

module.exports = MatrixController