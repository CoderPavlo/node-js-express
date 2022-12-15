const express = require('express');
const app=express();
const output = require("./1output.json");

app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
})

app.get("/output",function( req, res) {
  res.json(output)
});

app.listen(80);