const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const complainSchema = new Schema ({

    header:String,
    text:String,
    Email:String,
    Name:String
    
})

var Complains = mongoose.model('Complain', complainSchema)

module.exports = Complains