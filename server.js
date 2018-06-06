var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); 
var path = require('path');

app.use(express.static( __dirname + '/angular/dist' ));

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./angular/dist/index.html"))
  });

app.listen(8000, function() {
    console.log("listening on port 8000");
})