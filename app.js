var express = require('express');
var app = express();
var mongoose = require('mongoose');

var seedController = require('./controllers/seedController');
var apiController = require('./controllers/apiController');

var capitalCollections = require('./externalApiControllers/capitalCollections');

var database = "EvPast";

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/' + database);
// mongoose.connect(config.getDbConnectionString());

seedController(app);
apiController(app);

app.use('/capitalCollectionsCall', capitalCollections);
app.get('/test', function(req, res) {res.render('test')});




console.log("Running on port:");
console.log(process.env.PORT || "3000");


var institutionProfile = require('./models/institutionProfileModel');

app.listen(port);