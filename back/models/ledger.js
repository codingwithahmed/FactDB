const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ledgerSchema = new Schema ({
     feedback:String,
     Comment:String,
     link:String
})

var Ledgers = mongoose.model('Ledger', ledgerSchema)

module.exports = Ledgers