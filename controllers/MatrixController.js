const axios = require('axios')

class MatrixController {

  static getDistance(req, res) {
    let latOrigin = req.body.lat
    let lngOrigin = req.body.lng
    let address = req.body.address

    axios({
      url: `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${latOrigin},${lngOrigin}&destinations=${address}&key=${process.env.API_KEY_GOOGLE3}`,
      method: 'get'
    })
      .then(response => {
        let data = response.data.rows
        res.status(200).json({
          status: 'success',
          data: data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

}

module.exports = MatrixController