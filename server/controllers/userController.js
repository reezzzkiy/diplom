const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket_Object} = require('../models/models')

const generateJWT = (id, email, role) => {
    return  jwt.sign({id, email, role},
            process.env.SECRET_KEY,
            {expiresIn: '24h'} )
}

class UserController {
    async regisrtation(req, res, next) {
        const {email, password, role} = req.body
        if(!email || !password){
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await User.findOne({where:{email}})
        if(candidate){
            return next(ApiError.badRequest('Такой пользователь уже есть'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email,role, password: hashPassword})
        const basket = await Basket_Object.create({userId: user.id})
        // const token = jwt.sign({id: user.id, email, role}, process.env.SECRET_KEY, {expiresIn: '24h'} )
        const token = generateJWT(user.id, user.email, user.role)
        return res.json({token})
    }
    
    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where:{email}})
        if(!user){
            return next(ApiError.badRequest('Такого пользователя нет'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return next(ApiError.badRequest('Пароль не верный'))
        }
        const token = generateJWT( user.id, user.email, user.role)
        return res.json({token})
    }
    async check(req, res, next) {
        const token = generateJWT(req.user.id, req.user.email, req.user.role)
        return res.json({token})
        // const {id} = req.query
        // if(!id){
        //    return next(ApiError.badRequest("Не задан ID"))
        // }
        // res.json(id)
    }
}

module.exports = new UserController()