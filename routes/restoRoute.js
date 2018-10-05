const router = require('express').Router()
const restoController = require('../controllers/restoController')

router.get('/location/:q', restoController.getLocations)
router.get('/searchHome/:q', restoController.getSearchHome)
router.get('/search/:id/:type', restoController.getSearch)

// /restaurant/search/:q
module.exports = router
