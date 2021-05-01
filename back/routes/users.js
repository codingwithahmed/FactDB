var express = require('express');
const Users = require('../models/User');
var router = express.Router();
const mongoose = require('mongoose')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.route('/signup')
.get((req,res,next) => {
  Users.find((err,user) => {
    res.json(user)
    res.sendStatus = 200
  }, ((err) => next(err)).catch( (err) => next(err)))
})
.post((req,res,next) => {
  Users.create(req.body)
  .then( (user) => {
    res.json(user)
    res.statusCode = 200
    res.send(user.username)
  },((err) => next(err)).catch( (err) => next(err)) )
});


module.exports = router;
