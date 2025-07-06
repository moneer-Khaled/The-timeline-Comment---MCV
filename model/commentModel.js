const mongoose = require('mongoose')

const Schema = mongoose.Schema
const CommentSchema = new Schema({
    commentBody:{
        type: String, 
        required: true,
        minlength: [25, "Comment should be at least 25 characters"]
    },
    
    
},{timestamps:true})

const Commentmodel =mongoose.model('Comment',CommentSchema)

module.exports= Commentmodel
