const axios = require("axios")
const ErrorResponse = require("../utils/errorResponse")

exports.retrivepost = async () => {
    const getpost = async () => {
    try {
        return await axios.get('http://localhost:5000/')
    } catch (error) {
        return next(new ErrorResponse("Error at start ",500))
    }
}

const passingData = async () => {
    try {
      const data = await getpost()

      if(data.data){
          try{          
              console.log(data)
          }
          catch (error) {
            console.log('asd')
        }

      }
       
    }
    catch (error) {
        console.log(error)

    }
}

}