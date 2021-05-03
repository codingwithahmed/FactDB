var express = require('express');
var router = express.Router();
const Submit = require('../models/submit');

router.post('/', (req, res, next) =>  {
     Submit.findOne({link:req.body.link})
     .then((fact) => {
         if(!fact) {
             res.json({
                 desc:"NO SUCH FACT EXIST",
                 success:"false",
                 feedback:["Don't Exist","Don't Exist"],
                 Comment:["Don't Exist"]
             })
         }
         else {
             res.json({
                 desc:fact.desc,
                 success:"true",
                 feedback:fact.feedback,
                 Comment:fact.Comment
             })
         }
     }, (err) => next(err)).catch((err) => next(err))
});

module.exports = router;
