const Router = require('express')
const router = new Router()
const objectRouter = require('./objectRouter')
const infoRouter = require('./infoRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

router.use('/user',userRouter)
router.use('/info',infoRouter)
router.use('/type',typeRouter)
router.use('/object',objectRouter)



module.exports = router