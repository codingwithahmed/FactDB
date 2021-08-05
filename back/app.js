require("dotenv").config({ path: "./config.env" });
var express = require('express');
var mongoose = require('mongoose');
const { get } = require('./routes/index');
const uri = "mongodb://127.0.0.1:27017/fact"
const authRouter = require('./routes/auth')
const errorHandler = require("./middleware/error");
const privateRouter = require('./routes/private')
const adminrouter= require('./routes/admin')
const cors = require("cors")
const passport = require('passport')
const postRouter = require("./routes/post")
const submitRouter = require("./routes/submit")
const searchRouter = require("./routes/search")
const userRouter = require("./routes/users")
const checkRouter = require('./routes/check')
const newsRouter = require('./routes/News')
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true} ,() => {
  console.log('MongoDb Connected...')
})
var app = express();



app.use(express.json());
app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "allowedHeaders": ['Authorization', 'Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Access-Control-Request-Method', 'Access-Control-Request-Headers', 'Cache-Control']
}))


app.use('/api/auth',authRouter)
app.use('/api/private',privateRouter)
app.use('/api/admin',adminrouter)
app.use('/api/submitfact',submitRouter)
app.use('/api/post',postRouter)
app.use('/api/search',searchRouter);
app.use('/api/check',checkRouter);
app.use("/api/user",userRouter)
app.use('/api/news',newsRouter)
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
