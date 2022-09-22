const cart =require('./cart')
const {Schema} = require('mongoose')

function randomEmail() {
    return `${Date.now()}-${Math.random()}@anonymous.mail`
}

const user = new Schema({
    name: String,
    // name:{
    //     type: String,
    //     // required: false
    // },
    email:{
        type: String,
        default: randomEmail,
        unique:true
    },
    password:{
        type: String
        // required: true
    },
    role:{
        type: String,
        enum:['anonymous','client','admin'],
        // required:true,
        default:'anonymous'
    },
    cart: {
        type: ObjectId,
        required: true,
        ref: 'Cart'
    }
})

module.exports = user