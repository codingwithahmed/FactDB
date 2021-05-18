const User = require('../models/User')
const ErrorResponse = require("../utils/errorResponse");
const sendemail = require('../utils/sendemail')
const crypto = require('crypto')
var authenticate = require('../Stratgey/local')
var passport = require('passport')
exports.register = async (req,res,next) => {

    const {username,email,password} = req.body;

    try {
        const user = await User.create({
            username , email , password,factcoin:0,factcheck:1,factsubmit: 0,total_factcheck:0,total_factsubmit : 0,walletaddress:"Enter Wallet Address"
        })
        sendToken(user,201,res)
    } catch (error) {
        next(error)
    }

}

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
  
    // Check if email and password is provided
    if (!email || !password) {
      return next(new ErrorResponse("Please provide an email and password", 400));
    }
  
    try {
      // Check that user exists by email
      const user = await User.findOne({ email }).select("+password");
  
      if (!user) {
        return next(new ErrorResponse("Invalid credentials", 401));
      }
  
      // Check that password match
      const isMatch = await user.matchPassword(password);
  
      if (!isMatch) {
        return next(new ErrorResponse("Invalid credentials", 401));
      }
  
      sendToken(user,201,res)

    } catch (err) {
      next(err);
    }
  };
    


exports.forgotpassword = async (req,res,next) => {

        const {email } = req.body;

        try{
          const user = await User.findOne({email});

          if(!user) {
            return next(new ErrorResponse("Email could not sent",400))
          }

          const resettoken = user.getresettoken();

          await user.save();

          const resetUrl = process.env.CLIENT_URL + `/resetpassword/${resettoken}`;
          
          const message  = `
          <style>
          h1 {
            color:red;
          }
          </style>
          <h1> 
          You have request a password reset
          </h1>
          <p>Please go to this link to reset password</p>
          <a href=${resetUrl} clicktraking=off > ${resetUrl} </a>`

          try {
            await sendemail({
              to: user.email,
              subject: "Password Reset Request",
              html : message
            })
            res.status(200).json({ success: true, data: "Email Sent" });

          } catch (error) {
            user.resetpasswordtoken = null; 
            user.resetExpiretoken = null;

            await user.save()

            return next( new ErrorResponse("Email could not be sent" , 500))
          }

        }
        catch (error) {
                next(error)
        }
};

exports.resetPassword = async (req, res, next) => {
  // Compare token in URL params to hashed token
  const resetpasswordtoken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const user = await User.findOne({
      resetpasswordtoken,
      resetExpiretoken: { $gt: Date.now() },
    });

    if (!user) {
      return next(new ErrorResponse("Invalid Token", 400));
    }

    user.password = req.body.password;
    user.resetpasswordtoken = undefined;
    user.resetExpiretoken = undefined;

    await user.save();

    res.status(201).json({
      success: true,
      data: "Password Updated Success",
      token: user.getsignedtoken(),
    });
  } catch (err) {
    next(err);
  }
};

exports.googlesign = (req,res,next) => {

}

  const sendToken = (user,statuscode , res) => {
    const token = user.getsignedtoken(); 
    res.status(statuscode).json({ success:true , token})
  }