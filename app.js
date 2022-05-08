
// JIkM1xWYqyu8vdyN
// admin

const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.connect(
  "mongodb+srv://admin:JIkM1xWYqyu8vdyN@cluster0.8mxfw.mongodb.net/Book-Store?retryWrites=true&w=majority"
).then(()=>console.log("connected to the database"));

