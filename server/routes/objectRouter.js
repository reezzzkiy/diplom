const Router = require('express')
const router = new Router()
const ObjectController = require('../controllers/objectController')

router.post('/',ObjectController.create)
router.get('/',ObjectController.getAll)
router.get('/',ObjectController.getOne)



module.exports = router