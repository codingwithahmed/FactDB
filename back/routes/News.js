var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const News = require('../models/News');
var fs = require('fs');
const {DeleteFunlinkSyncile} = require('../utils/util')
var AWS = require('aws-sdk');
let {uploadFile} = require('../utils/S3')
AWS.config.update({region: 'us-west-2'});
s3 = new AWS.S3({apiVersion: '2006-03-01'});


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
        New.forEach(e => e.src ='')
        res.json(New)
    })
})

.post( async (req,res,next) => {
    const data = req.body

    const s3return = await uploadFile(data.file,data.ext)
    console.log(s3return)
    DeleteFunlinkSyncile(s3return.Key)
    let src = s3return.Location
    News.create({
        content  : data.content,
        user: data.user,
        link: data.link,
        pushed:[{
            users:data.pushed.users,
            push_times:data.pushed.push_times
        }],
        source:src.toString(),
        meadia:data.media,
        ext:data.ext,
        uni_id: shuffelWord(data.user+data.link+Math.random()*14130)
    }).then( (x) => {
        res.json({x,succes:"File Uploading"})
        console.log(x)
        x.save()
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



module.exports = router