const {Object, Info} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')
class ObjectController {
    async create(req, res, next) {
        try {
             const {name, price, typeId, info} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname,'..','static', fileName))
        if (info){
            info = JSON.parse(info)
            info.array.forEach(i => {
                Info.create({
                    title: i.title,
                    description: i.description,
                    objectId: object.id
                })
            });
        }
        
        const object = await Object.create({name, price, img:fileName, typeId})
        return res.json(object)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
       


    }
    async getAll(req, res) {
       const { typeId, limit, page} = req.query
        page == page || 1
        limit == limit || 9
        let offset = page * limit - limit
       let object
       if (!typeId){
            object = await Object.findAndCountAll({limit, offset})
       }
       if ( typeId){
        object = await Object.findAndCountAll({where: {typeId}, limit, offset})
       }
       return res.json(object)
    }
    async getOne(req, res) { // не работает :(
       const {id} = req.params
       const object = await Object.findOne(
        {
                where:{id},
                include: [{model:Info, as:'title'}]
        },
       )
       return res.json(object)
    }

}

module.exports = new ObjectController()