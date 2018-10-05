const router = require('express').Router()
const restoController = require('../controllers/restoController')

router.get('/location/:q', restoController.getLocations)
router.get('/search/:q', restoController.getSearch)

// /restaurant/search/:q
module.exports = router
