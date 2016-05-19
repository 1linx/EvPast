var express = require('express');
var app = express();

var mongodb = require('mongodb'),
  MongoClient = mongodb.MongoClient, 
  assert = require('assert');  
  
var mongoose = require('mongoose');

// original controllers
// var seedController = require('./controllers/seedController');
var apiController = require('./controllers/apiController');

// new controllers - to be renamed
var newAPIController = require('./controllers/newAPIController');
var testSeedController = require('./controllers/testSeedController');

var capitalCollections = require('./externalApiControllers/capitalCollections');

// var database = "EvPast";
// var database = "myproject";
var url = 'mongodb://localhost:27017/myproject';

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

// var db = mongoose.connect('mongodb://localhost:27017/' + database);
// console.log(db);

// mongoose.connect(config.getDbConnectionString());

//internal API calls and other functions
// seedController(app);
apiController(app);
newAPIController(app, url);
testSeedController(app, url);

// external API calls
app.use('/capitalCollectionsCall', capitalCollections);


console.log("Running on port:");
console.log(process.env.PORT || "3000");

app.listen(port);