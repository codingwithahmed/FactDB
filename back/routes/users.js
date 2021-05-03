var express = require('express');
const Users = require('../models/User');
var router = express.Router();
const mongoose = require('mongoose')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
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
})
module.exports = router;
