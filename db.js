var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
MongoClient.connect('mongodb://40.114.237.167/test', function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database");
    }
    db.close();
});