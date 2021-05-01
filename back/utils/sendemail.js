const nodemailer = require('nodemailer')

const sendemail = (option) => {
     const transporter = nodemailer.createTransport({
         service: process.env.EMAIL_SERVICE,
         auth:{
             user : process.env.EMAIL_USERNAME,
             pass: process.env.EMAIL_PASSWORD
         }
     })

     const mailoption = {
         from : process.env.EMAIL_FROM,
         to: option.to,
         subject: option.subject,
         html: option.html
     }

     transporter.sendMail(mailoption, function(err,info) {
         if(err) {
             console.log(err)
         }
         else{
             console.log(info)
         }
     })
}

module.exports = sendemail