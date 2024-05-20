const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    title:{
        type: String, 
        required: true
    },
    content: {
        type: String, 
        required: true
    },
    author : {
        type : String,
        required: true
    },
    createdAt : {
        type :Data,
        default: Data.now
    }
}); 

module.exports = mongoose.model('PostSchema', postSchema)