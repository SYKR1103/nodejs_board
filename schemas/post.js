





const mongoose = require('mongoose')
const moment = require("moment")

const postSchema = new mongoose.Schema({

    title : {
        type : String,
        required : true,
        unique : true

    },
    content : {
        type:String,
        required : true,
    },
    writer : {
        type:String,
        required : true,
    },
    password : {
        type:String,
        required : true,
    },
    createdAt: { 
        type: String, 
        default: moment().format("YYYY-MM-DD hh:mm:ss") 
    },
    updatedAt: { 
        type: Date 
    }
}, 
{timestamps : true}

);

module.exports = mongoose.model('post', postSchema)