var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var PetInfo = require("../database/index");

app.use(express.static(__dirname));

var app = express(); 
mongoose.connect('mongodb://localhost/adoption');
mongoose.Promise = global.Promise;
app.use(bodyParser.json());
app.use(function(err,req,res,next){
  // console.log(err)
  res.send({error: err.message})
})

app.get('/petsTable', function(req, res,next){
  PetInfo.find({}).then(function(pets){
    res.send(JSON.stringify(pets))
  })
});
app.get('/', function(req, res,next){
  PetInfo.find({}).then(function(pets){
    res.redirect('/index.js')
  })
});

app.post('/addPet',function(req,res,next){
  PetInfo.create(req.body).then(function(petInfo){
    res.send(petInfo);
  }).catch(next);
  // PetInfo.insert(
  // 	name : req.body.name, 
  // 	species : req.body.species, 
  // 	description : req.body.description,
  // 	image : req.body.image,
  // 	username : req.body.username,
  // 	email : req.body.email,
  // 	number : req.body.number
  // })
  
});

app.listen(process.env.port || 4000,function(){
  console.log('listening for requests');
})