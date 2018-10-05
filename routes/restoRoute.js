const router = require('express').Router()
const restoController = require('../controllers/restoController')
const isLogin = require('../middleware/isLogin')

router.get('/location/:q', isLogin, restoController.getLocations)
router.get('/searchHome/:q', isLogin, restoController.getSearchHome)
router.get('/search/:id/:type/:sort/:order', isLogin, restoController.getSearch)


// /restaurant/search/:q
module.exports = router
