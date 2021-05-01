const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const postSchema = new Schema ({
  
    desc:{
        type:String
    },
    link:{
        type:String
    },
    Headline:{
        type: String,

    },
    Clickbait:{type:String},
    IsInsult:String,
    Result:String,
    Sarcasm:String,
    Racsim:String,
    Tweet_user : String
})

var Posts = mongoose.model('Post', postSchema)

module.exports = Posts