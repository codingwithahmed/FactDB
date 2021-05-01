const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const infoSchema = new Schema ({
  
    Headers:{
        type:String
    },
    Text:{
        type: String,
    }
    ,Name:String,
    Email:String
})

var Infos = mongoose.model('Info', infoSchema)

module.exports = Infos