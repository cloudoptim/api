'use strict';

console.log('inside server.js');

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');		//For enabling CORS so that angular app can call APIs from different domain/port

mongoose.connect('mongodb://prasadsuvarapu:prasadc85!@ds157559.mlab.com:57559/appcreator');


//mongoose.connect('mongodb://34.201.160.180:27017/appcreator');

//mongoose.connect('mongodb://mongoapicreator/appcreator');

var app = express();
//app.options('*', cors()) // include before other routes

//app.use(cors());	//enable express to use CORS. You may want to disable/restrict in production
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

console.log('Will apply routes now');

app.use('/api', require('./routes/api'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(3000);
console.log('Listening on port 3000');
