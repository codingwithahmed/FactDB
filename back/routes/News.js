var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const News = require('../models/News');


function shuffelWord (word){
    var shuffledWord = '';
    word = word.split('');
    while (word.length > 0) {
      shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
    }
    return shuffledWord.replace(/\s/g, "");;
}

router.route('/')
.get((req,res,next) => {
    News.find((err,New) => {
        res.json(New)
    })
})

.post((req,res,next) => {
    const data = req.body
    console.log(data)
    News.create({
        content  : data.content,
        user: data.user,
        link: data.link,
        pushed:[{
            users:data.users,
            push_times:data.push_times
        }],
        uni_id: shuffelWord(data.user+data.link+Math.random()*14130)
    }).then((x) => {
        res.json({x,succes:"true"})
    }).catch((err) => next(err))
})

.put((req,res,next) => {
    const data = req.body
    News.findOne({uni_id:data.uni_id},(err,newz) => {
        let x =  newz.pushed
        x.push_times++
        newz.save()
        res.json(x)
    })
});

router.route("/save")

module.exports = router