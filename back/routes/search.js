var express = require('express');
var router = express.Router();
const Submit = require('../models/submit');

router.post('/', (req, res, next) =>  {
     Submit.find({link: req.body.link} , (err,fact) => {
    
        if(fact.length == 0) {
            res.json(
                [
                    {
                        desc:"NO SUCH FACT EXIST",
                        success:"false",
                        feedback:["Don't Exist"],
                        Comment:["Don't Exist"],
                        link :" Don't Exist"
                    }
                ]
                
            )

        }
        else {
            if(Array.isArray(fact)){
                res.json(fact)
            }
            else{
                res.json([fact])
            }
        }
     })
});
        

module.exports = router;

