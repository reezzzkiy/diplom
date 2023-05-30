const sequelize = require('../db')
const {DataTypes, STRING} = require('sequelize')

const User = sequelize.define('user',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    email: {type: DataTypes.STRING, unique:true,},
    password:{type: DataTypes.STRING,},
    role:{type: DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
})

const Basket_Object = sequelize.define('basket_object',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
})

const Object = sequelize.define('object',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, unique:true, allowNull:true},
    price: {type: DataTypes.INTEGER, allowNull:true},
    img: {type: DataTypes.STRING, allowNull:true},
})

const Type = sequelize.define('type',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, unique:true, allowNull:true},
})

const Info = sequelize.define('info',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    title: {type: DataTypes.STRING, allowNull:true},
    description: {type: DataTypes.STRING, allowNull:true},
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(Basket_Object)
Basket_Object.belongsTo(Basket)

Type.hasMany(Object)
Object.belongsTo(Type)

Object.hasMany(Info)
Info.belongsTo(Object)

module.exports = {
    User, Basket, Basket_Object, Info, Type, Object
}