require('dotenv').config()
const fs = require('fs')
const S3 = require('aws-sdk/clients/s3')
const axios = require('axios')
const BucketName = "factdb"
var crypto = require("crypto");
const region =  "us-east-2"
const acesskey = "AKIA4W3LZ4KLFFQSBKFO"
const secretkey ="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"
const s3 = new S3({
    region,
    accessKeyId:acesskey,
    secretAccessKey:secretkey
})

 const uploadFile = async (file,mimeType) => {
     console.log(file.split('.')[file.split('.').length - 1])
     mimeType = file.split('.')[file.split('.').length - 1]
    var base64Data = file.split(';base64,')[1];
    let filename = crypto.randomBytes(20).toString('hex');
   // const fileContents = new Buffer.from(base64Data, 'base64')
    await fs.writeFile(filename+'.'+mimeType, file,(err) => {
    if(err) console.error(err)
    console.log('Filename : ', filename+'.'+mimeType )
})

const selectFile = fs.createReadStream('./'+filename+'.'+mimeType)

/*if(selectFile !== null && selectFile !== undefined) {
    console.log('Read the file : ', selectFile)
}*/

const uploadPrams = {
    Bucket : BucketName,
    Body : file,
    Key: filename+'.'+mimeType
}
return s3.upload(uploadPrams).promise()
}

exports.uploadFile =uploadFile