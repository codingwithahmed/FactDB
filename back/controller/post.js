const { default: axios } = require('axios')
const ErrorResponse = require('../utils/errorResponse')

exports.postcreate = async (req ,res,next) => {
    const { link } = req.body

    try {
        
try{
          const a = await  axios({
                method:'post',
                url:"http://localhost:5000/",
                data:{
                    "link":req.body.link
                }
            })

            try {

                x = {
                    Headline:String(a.data.Headline ),
                    desc:String(a.data.Para),
                    link:req.body.link,
                    Clickbait:a.data.Clickbait,
                    IsInsult : a.data.IsInsult,
                    Result:a.data.Result,
                    Sarcasm : a.data.Sarcasm,
                    Racsim : a.data.Racsim,
                }

                try {
                    await res.json(x)
                   
                } catch (error) {
                    return next(new ErrorResponse("Server Error ",501))

                }
            } catch (error) {
                return next(new ErrorResponse("Server Error ",501))

            }
              
        }
        catch (error) {
           return next(new ErrorResponse("Server Error ",501))
        }
    }
     
     catch (error) {
        return(new ErrorResponse("Server Couldn't get Data",505))
    }
}


exports.tweetpost = async (req , res , next) => {

const {link} = req.body

    try {
      
try {
            axios({
                method:'post',
                url:"http://localhost:5000/tweet",
                data:{
                    "tweet":req.body.link
                }
            }).then((rel ) => {
                x = {
                    Headline:String(rel.data.Headline ),
                    link:req.body.link,
                    Clickbait:rel.data.Clickbait,
                    IsInsult : rel.data.IsInsult,
                    Result:rel.data.Result,
                    Sarcasm : rel.data.Sarcasm,
                    Racsim : rel.data.Racsim,

                }
                console.log(x)
                res.json(x)
            },(err) => next(err)).catch((err) => next(err))

        } catch (error) {
                return next(new ErrorResponse("Server Got Fucked",502))
        }
            
        
    } catch (error) {
        return(new ErrorResponse("Server Couldn't get Data",505))
    }
}

exports.factcheck = async (req,res,next) => {
    
    
try {
            axios({
                method:'post',
                url:"http://localhost:5000/fact",
                data:{
                    "fact":req.body.fact
                }
            }).then((rel ) => {
                x = {
                    Headline:String(rel.data.Headline),
                    Clickbait:rel.data.Clickbait,
                    IsInsult : rel.data.IsInsult,
                    Result:rel.data.Result,
                    Sarcasm : rel.data.Sarcasm,
                    Racsim : rel.data.Racsim,

                }
                console.log(x)
                res.json(x)
            },(err) => next(err)).catch((err) => next(err))

        } catch (error) {
                return next(new ErrorResponse("Server Error :- 502",502))
        }
            
        }
     