var express = require('express');
var router = express.Router();
const Ledger = require('../models/ledger')
const Submit = require('../models/submit')
const Users = require("../models/User")
/* GET home page. */
router.put('/', function(req, res, next) {
    Submit.findOne({link:req.body.link,desc:req.body.desc} , (err,fact) => {
        
        fact.Comment.push(req.body.Comment);
        fact.feedback.push(req.body.feedback);
        fact.users.push(req.body.user)
        console.log(req.body.link)
        fact.save().then((fact) => {
        res.json(req.body.Comment)
        console.log(fact.Comment[-1])
        Ledger.create({
            feedback:req.body.feedback,
            Comment:req.body.Comment,
            link:req.body.link,
            username:req.body.username
        }).then((s) => console.log(s)).then(z => console.log(req.body.username))
        Users.findOne({email:req.body.user} , (err,user) =>{
                if(user.factcheck == 5 ) {
                     user.factcoin++
                     user.factcheck = 0
                     user.save()
                     .then((user) => {
                        console.log(user)
                    })
                }
                else {
                    user.factcheck++
                    user.save()
                    .then((user) => {
                        console.log(user)
                    })
                }
             
            })
        
    }, (err) => next(err)).catch((err) => next(err))
     })
     
}) ;

router.get("/",(req,res,next) => {
    Ledger.find((err,doc) => {
        res.status(201).json(doc)
    })
})

router.post("/factcoin",(req,res,next) => {
    Users.findOne({email:req.body.email} , (err,user) => {
        res.json(user)
        console.log( user)
    })
})

module.exports = router;
