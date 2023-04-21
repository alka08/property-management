const Mongoose = require("mongoose");

const propertySchema = new Mongoose.Schema({
    user_id:{
       type: String
    },
    username: {
        type: String
    },
    propertyname:{
        type: String,
        required: true
    },
    address:{
        type: String,
    },
    dimensions:{
        type: String,
    },
    price:{
        type: Number,
    },
    images:{
        type: String,
    },
    status:{
        type: String,
        enum: ['Aproved', 'Rejected']
      }
})

module.exports = Mongoose.model('Propertie',propertySchema)