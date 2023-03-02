
const mongoose = require('mongoose')


const commentSchema =  new mongoose.Schema({
    post:{type:mongoose.Schema.Types.ObjectId, ref:'post', required:true},
    content:{type:String, required:[true,'댓글 내용을 입력해주세요']},
    commenter : {type:String, required:[true,'이름을 입력해주세요']},
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date},    
})


module.exports = mongoose.model('comment', commentSchema);