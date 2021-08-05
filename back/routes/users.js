var express = require('express');
const Users = require('../models/User');
const News = require('../models/News.js')
var router = express.Router();
const mongoose = require('mongoose')
/* GET users listing. */
router.get('/', function(req, res, next) {
  Users.find( (err,users) =>{
    res.json(users)
  })
});

router.route('/signup')

.post((req,res,next) => {
  Users.create(req.body)
  .then( (user) => {
    res.json(user)
    res.statusCode = 200
    res.send(user.username)
  },((err) => next(err)).catch( (err) => next(err)) )
})

.put((req,res,next) => {
  Users.findOne({email:req.body.email})
  .then((user) => {
    user.walletaddress = req.body.walletaddress
    user.username = req.body.username
    user.email = req.body.email
    user.save()
    .then((user) => {
      console.log(user)
      res.json(user)
    }, (err) => next(err)).catch((err) => next(err))
  }, (err) => next(err)).catch((err) => next(err))
});

router.route("/")
.post((req,res,next) => {
  Users.findOne({email:req.body.email}).then((user) => {
    res.status(202).json(user)
  }, (err) => next(err)).catch((err) => next(err))
});


router.route('/savenews')
.post((req,res,next) => {
  Users.findOne({email:req.body.email}).then((user) => {
    const data = req.body
   user.savednews.push({
    content  : data.content,
    user: data.user,
    link: data.link,
    pushed:[{
        users:data.users,
        push_times:data.push_times
    }],
    uni_id: data.uni_id
   })
   user.save()
   console.log("Saved News")
   res.json(user)
  }, (err) => next(err)).catch((err) => next(err))
  })
module.exports = router;
