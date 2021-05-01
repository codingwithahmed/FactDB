const express = require('express');
const Postrouter = express.Router();
const axios = require("axios")
const {postcreate,tweetpost,factcheck} = require('../controller/post')
const {retrivepost} = require('../middleware/post')
Postrouter.route('/').post(postcreate);
Postrouter.route('/tweet').post(tweetpost)
Postrouter.route('/fact').post(factcheck)

module.exports = Postrouter;
