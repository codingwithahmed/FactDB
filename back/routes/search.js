var express = require('express');
var router = express.Router();
const Submit = require('../models/submit');

router.post('/', (req, res, next) =>  {
     Submit.findOne({link:req.body.link})
     .then((fact) => {
         if(!fact) {
             res.json({
                 desc:"NO SUCH FACT EXIST",
                 success:"true"
             })
         }
         else {
             res.json({
                 desc:fact.desc,
                 success:"true"
             })
         }
     })
});

module.exports = router;
