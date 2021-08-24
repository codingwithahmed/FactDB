const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const newSchema = new Schema ({
    content:String,
    user:String,
    link:String,
    pushed:{
        users:[String],
        push_times:Number
    },
    uni_id: String,
    src:String,
    isVideo:Boolean,
    isAudio:Boolean,
    isImg:Boolean
})

var News = mongoose.model('New', newSchema)

module.exports = News