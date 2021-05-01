const express = require('express')
const routrer = express.Router()
const passport = require('passport')
const authencate = require('../Stratgey/local')
const { 
    register,
    login,
    resetPassword,
    forgotpassword
    } = require('../controller/auth')

routrer.route('/register').post(register)
routrer.route('/login').post(login)
routrer.route('/forgotpassword').post(forgotpassword)
routrer.route('/resetpassword/:resetToken').put(resetPassword)
routrer.route('/google/redrict').get( passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));


module.exports = routrer