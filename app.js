// JIkM1xWYqyu8vdyN
// admin

const express = require("express");
const mongoose = require("mongoose");

const app = express();
// Middlewares
app.use('/',(req,res,next)=>{
    res.send('<h1>Book Store Homepage</h1>')
})

mongoose
  .connect(
    "mongodb+srv://admin:JIkM1xWYqyu8vdyN@cluster0.8mxfw.mongodb.net/Book-Store?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to the database"))
  .then(() => {
    app.listen(8000);
  })
  .catch((err) => {
    console.log(err);
  });
