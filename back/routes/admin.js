const express = require('express')
const Users = require('../models/User');
const Post = require('../models/Post')
const Complain = require('../models/Complain');
const Infos = require('../models/Info');
const axios = require("axios")
var router = express.Router();


router.route('/finduser')
.get((req,res,next)=>{
  Users.find((err,user)=>{
      res.json(user);
      res.sendStatus= 200;
  })
});

router.route('/updateuser/:id')
.put((req,res,next) => {
    Users.findOne({email:req.params.id}).then((user) => {
        user.email = req.body.email ;
        user.username = req.body.username ;
        user.save();
        res.json(user)
    },(err) => next(err)).catch( (err) => next(err))
});

router.route('/deleteuser/:id')
.delete((req,res,next) => {
    Users.findOne({email:req.params.id})
    .then((user) => {
      if(!user){
        res.json({username:"No user exist"})
      console.log('No User to Delete')
      }
      else {
        res.json(user)
        user.delete();
      console.log('Fucking Delete user')
      }
     
    })
});

router.route('/deletepost/:id')
.delete((req,res,next) => {
    Post.findById(req.params.id)
    .then((user) => {
      if(!user){
        res.json({Headline:"No Post exist"})
         console.log('No Post to Delete')
      }
      else {
        res.json(user)
        user.delete();
      console.log('Fucking Delete user')
      }
     
    })
});

router.route('/finduser/:email')
.get((req,res,next)=>{
  Users.findOne({email:req.params.email})
  .then((user) => {
    res.json(user)
    console.log(user)
  })
});

router.route('/findPost')
.get((req,res,next)=>{
  Post.find((err,user)=>{
      res.json(user);
      res.sendStatus= 200;
  })
});


router.route('/findpost/link')

.post((req,res,next)=>{
  Post.findOne({link:req.body.link})
  .then((user) => {
    res.json(user)
    console.log(user)
  })
});

router.route('/findposts/:id')
.get((req,res,next) => {
  Post.findOne({_id:req.params.id})
  .then((user) => {
    res.json(user)
    console.log(user)
  })
})

router.route('/updatepost')
.put((req,res,next) => {
    Post.findOne({link:req.body.link}).then((user) => {
        user.Headline = req.body.Headline ;
        user.desc = req.body.Text ;
        user.Clickbait = req.body.Clickbait;
        user.IsInsult = req.body.IsInsult
        user.Result = req.body.Result
        user.Sarcasm = req.body.Sarcasm
        user.Racsim = req.body.Racsim

        user.save();
        res.json(user)
    },(err) => next(err)).catch( (err) => next(err))
});



router.route('/createpost')
.post((req,res,next) => {
  Post.create(req.body)
  .then((post) => {
    res.json(post)
    console.log(post)
  })
});
router.route('/complain')
.get((req,res,next) => {
  Complain.find((err , user) => {
    res.json(user)
  })
})
.post((req,res,next) => {
  Complain.create(
    req.body
  )
  .then( (complain) => {
    res.json(complain)
    console.log(complain)
    res.sendStatus = 200;
  })
  });

router.route('/info')
.get((req,res,next) => {
  Infos.find((err,info) => {
    res.json(info)
  })

})
.post((req,res,next) => {
  Infos.create(req.body)
  .then( (info) => {
    res.json(info)
    console.log(info)
    res.statusCode = 200
  })
});


router.route('/login')
.post((req,res,next) => {
  const user = {
    email:"adminanadadmin@admin.join.com",
    password:"Bw32e1gt54e2d12lo0",
    msg:"Sucess",
    token:"Bw32e1gt54e2d12lo0adminanadadmin"
  }
  if (user.email == req.body.email && user.password == req.body.password){
    res.json(user)
  }
  else{
    res.json({msg:"Failed"})
  }
});




module.exports = router
