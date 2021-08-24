const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const submitSchema = new Schema ({
  
    username:String,
    link:{
        type:String
    },
    desc:{
        type: String,
    },
    language:String,
    feedback: [String],
    Comment:[{
        type:String
    }],
    users:[{
        type: String
    }],
    src:String,
    isVideo:Boolean,
    isAudio:Boolean,
    isImg:Boolean
})

var Submited = mongoose.model('Submit', submitSchema)

module.exports = Submited