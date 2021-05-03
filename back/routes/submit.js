var express = require('express');
const Submit = require('../models/submit');
const Users = require("../models/User")
var router = express.Router();
const mongoose = require('mongoose')


router.route('/')
.get((req,res,next) => {
    Submit.find((err,submit) => {
        
    console.log(submit.filter(fact => fact.users.length  > 5))
    res.json( submit.filter(fact => fact.users.length  < 5))    
    res.sendStatus = 200
  })
})
.post((req,res,next) => {
    Submit.create(req.body)
    Users.findOne({email:req.body.username} , (err,user) =>{
      if(user.factsubmit == 10 ) {
           user.factcoin++
           user.factsubmit = 0
           user.save()
           .then((user) => {
              console.log(user)
          })
      }
      else {
          user.factsubmit++
          user.save()
          .then((user) => {
              console.log(user)
          })
      }
   
  })
  .then( (submited) => {
    res.json(submited)
    res.statusCode = 200
   }, (err) => next(err)).catch((err) => next(err))
});


module.exports = router;
