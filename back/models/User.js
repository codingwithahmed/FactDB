const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt  = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto = require(`crypto`)
const UsersSchema = new Schema({

     username:{
         required:true,
         type:String
     },
     firstname:{
         type:String
     },
     lastname:{
         type:String
     },
     email:{
         required:true,
         type:String,
         unique:true,
         match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email",
          ]
     },
     password: {
         type:String,
         required:[true,"Please add a password"],
         minlenght:8
     },
     resetpasswordtoken:String,
     resetExpiretoken: Date,
     factcoin:{type:Number,default:0},
     factcheck:{type:Number,default:0},
     factsubmit:{type:Number,default:0},
     walletaddress:{type:String}

} , {
    timestamps:true
})


UsersSchema.pre("save", async function (next) {
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password , salt);
    next();
});

UsersSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

UsersSchema.methods.getsignedtoken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECERT, {expiresIn:process.env.JWT_EXPIRE})
};

UsersSchema.methods.getresettoken =  function(){
    const resettoken = crypto.randomBytes(20).toString("hex"); 

    this.resetpasswordtoken = crypto
    .createHash("sha256")
    .update(resettoken)
    .digest("hex");
    this.resetExpiretoken = Date.now() + 10*(60*1000);
    return resettoken;
}
 
var Users = mongoose.model('User', UsersSchema)

module.exports = Users