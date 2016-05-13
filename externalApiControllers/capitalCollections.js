var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
    // input value from search
    var searchCriteria = req.query.search;
    console.log("searchCriteria: " + searchCriteria);
    

    // url used to search Capital Collections
    var url = "http://www.capitalcollections.org.uk/api/v1/items?criteria=" + searchCriteria;
    console.log("URL: " + url);

    // request module is used to process the  url and return the results
    request(url, function(err, resp, body) {
        console.log("Requesting...");
        
        // console.log(body);
       
        // pass back the XML to client side
        res.send(body);
    });
    
});

module.exports = router;
