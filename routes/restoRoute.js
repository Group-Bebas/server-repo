const router = require('express').Router()
const restoController = require('../controllers/restoController')
const isLogin = require('../middleware/isLogin')

router.get('/location/:q', restoController.getLocations)
router.get('/searchHome/:q', restoController.getSearchHome)
router.get('/search/:id/:type/:sort/:order', restoController.getSearch)


// /restaurant/search/:q
module.exports = router
