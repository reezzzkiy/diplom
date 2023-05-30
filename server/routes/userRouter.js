const Router = require('express')
const router = new Router()
const UserController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')


router.post('/registration',UserController.regisrtation)
router.post('/login',UserController.login)
router.get('/auth', authMiddleware, UserController.check)
// router.get('/auth',(req,res)=>{res.json({message:'work'})}) // проверка



module.exports = router