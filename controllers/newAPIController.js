var mongodb = require('mongodb'),
  MongoClient = mongodb.MongoClient, 
  assert = require('assert');  
var bodyParser = require('body-parser');

module.exports = function(app, url) {

    app.post("/search", function(req, res) {
        // search function goes here
        console.log('searched for: ' + req.body.search);
    var results = [];  
        
    var findDocuments = function(db, callback) {
        // Get the documents collection
        var collection = db.collection('artefacts');
        // Find some documents
        collection.find({ '$text': {'$search' : req.body.search } } ).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs);
        results = docs;
        callback(docs);
        });      
    }

    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server");
        findDocuments(db, function() {
        db.close();      
        res.send(results);
        });
    });
    });
};