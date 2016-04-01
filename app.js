var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
// var setupController = require('./controllers/setupController');
var seedController = require('./controllers/seedController');
var apiController = require('./controllers/apiController');

var database = "EvPast";

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/' + database);
// mongoose.connect(config.getDbConnectionString());

seedController(app);
apiController(app);

console.log("Running...");

var institutionProfile = require('./models/institutionProfileModel');


app.listen(port);