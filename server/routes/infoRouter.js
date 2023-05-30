const Router = require('express')
const router = new Router()
const InfoController = require('../controllers/infoController')



router.post('/',InfoController.create)
router.get('/',InfoController.getAll)



module.exports = router //dddd