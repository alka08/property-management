const Mongoose = require("mongoose");

const userSchema = new Mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
    },
    phone:{
        type: String,
    },
    password:{
        type:String,
    },
    role:{
        type:String,
        enum:['admin','seller','buyer'],
    }
})

module.exports = Mongoose.model('User',userSchema)