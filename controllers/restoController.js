const axios = require('axios')
module.exports = {

    getAllCategoryFood: (req, res) => {
        axios({
            method: 'GET',
            url: 'https://developers.zomato.com/api/v2.1/categories',
            headers: {
                'user-key': process.env.ZOMATO_TOKEN
            }
        })
        .then( response => {
            let result = response.data.categories
            res.status(200).json({found: result})
        })
        .catch( err => {
            res.send(500).json({err:"Internal server error"})
        })
    },

    getCitiesSearch: (req, res) => {
        axios({
            method: 'GET',
            url: `https://developers.zomato.com/api/v2.1/cities?q=${req.params.q}`,
            headers: {
                'user-key': process.env.ZOMATO_TOKEN
            }
        })
        .then( response => {
            let result = response.data
            res.status(200).json({found: result})
        })
        .catch( err => {
            res.send(500).json({err:"Internal server error"})
        })
    },

    getCollection: (req, res) => {
        axios({
            method: 'GET',
            url: `https://developers.zomato.com/api/v2.1/collections?city_id=${req.params.id}`,
            headers: {
                'user-key': process.env.ZOMATO_TOKEN
            }
        })
        .then( response => {
            let result = response.data
            res.status(200).json({found: result})
        })
        .catch( err => {
            res.send(500).json({err:"Internal server error"})
        })
    },

    getCuisien: (req, res) => {
        axios({
            method: 'GET',
            url: `https://developers.zomato.com/api/v2.1/cuisines?city_id=${req.params.id}`,
            headers: {
                'user-key': process.env.ZOMATO_TOKEN
            }
        })
        .then( response => {
            let result = response.data
            res.status(200).json({found: result})
        })
        .catch( err => {
            res.send(500).json({err:"Internal server error"})
        })
    },

    getEstablishments: (req, res) => {
        axios({
            method: 'GET',
            url: `https://developers.zomato.com/api/v2.1/establishments?city_id=${req.params.id}`,
            headers: {
                'user-key': process.env.ZOMATO_TOKEN
            }
        })
        .then( response => {
            let result = response.data
            res.status(200).json({found: result})
        })
        .catch( err => {
            res.send(500).json({err:"Internal server error"})
        })
    },

    getGeocode: (req, res) => {
        let lat = req.params.lat || '-6.264853'
        let lon = req.params.lon || '106.7765558'
        axios({
            method: 'GET',
            url: `https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${lon}`,
            headers: {
                'user-key': process.env.ZOMATO_TOKEN
            }
        })
        .then( response => {
            let result = response.data
            res.status(200).json({found: result})
        })
        .catch( err => {
            res.send(500).json({err:"Internal server error"})
        })
    },

    getLocationDetail: (req, res) => {
        let id = req.params.id || '74'
        let type = req.params.type || 'city'
        axios({
            method: 'GET',
            url: `https://developers.zomato.com/api/v2.1/location_details?entity_id=${id}&entity_type=${type}`,
            headers: {
                'user-key': process.env.ZOMATO_TOKEN
            }
        })
        .then( response => {
            let result = response.data
            res.status(200).json({found: result})
        })
        .catch( err => {
            res.send(500).json({err:"Internal server error"})
        })
    },

    getLocations: (req, res) => {
        let query = req.params.query || 'jakarta'
        axios({
            method: 'GET',
            url: `https://developers.zomato.com/api/v2.1/locations?query=${query}`,
            headers: {
                'user-key': process.env.ZOMATO_TOKEN
            }
        })
        .then( response => {
            let result = response.data
            console.log(response)
            res.status(200).json({found: result})
        })
        .catch( err => {
            res.send(500).json({err:"Internal server error"})
        })
    },

    getDailyMenu: (req, res) => {
        let restoid = req.params.restoid || 'jakarta'
        axios({
            method: 'GET',
            url: `https://developers.zomato.com/api/v2.1/dailymenu?res_id=${restoid}`,
            headers: {
                'user-key': process.env.ZOMATO_TOKEN
            }
        })
        .then( response => {
            let result = response.data
            res.status(200).json({found: result})
        })
        .catch( err => {
            res.send(500).json({err:"Internal server error"})
        })
    },

    getRestauran: (req, res) => {
        let restoid = req.params.restoid || 'jakarta'
        axios({
            method: 'GET',
            url: `https://developers.zomato.com/api/v2.1/restaurant?res_id=${restoid}`,
            headers: {
                'user-key': process.env.ZOMATO_TOKEN
            }
        })
        .then( response => {
            let result = response.data
            res.status(200).json({found: result})
        })
        .catch( err => {
            res.send(500).json({err:"Internal server error"})
        })
    },

    getRestotanReviews: (req, res) => {
        let restoid = req.params.restoid || 'jakarta'
        axios({
            method: 'GET',
            url: `https://developers.zomato.com/api/v2.1/reviews?res_id=${restoid}`,
            headers: {
                'user-key': process.env.ZOMATO_TOKEN
            }
        })
        .then( response => {
            let result = response.data
            res.status(200).json({found: result})
        })
        .catch( err => {
            res.send(500).json({err:"Internal server error"})
        })
    },

    getSearch: (req, res) => {
        let q = req.params.q || 'jakarta'
        axios({
            method: 'GET',
            url: `https://developers.zomato.com/api/v2.1/search?q=${q}&sort=rating&order=desc`,
            headers: {
                'user-key': process.env.ZOMATO_TOKEN
            }
        })
        .then( response => {
            let result = response.data.restaurants
            // console.log(result[0].restaurant.id)
            res.status(200).json({restaurants: result})
        })
        .catch( err => {
            res.send(500).json({err:"Internal server error"})
        })
    }
}