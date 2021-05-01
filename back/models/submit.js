const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const submitSchema = new Schema ({
  
  
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
    }]
   
})

var Submited = mongoose.model('Submit', submitSchema)

module.exports = Submited