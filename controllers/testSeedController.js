var async = require('async');

var MongoClient = require('mongodb').MongoClient
 , assert = require('assert');

// var url = 'mongodb://localhost:27017/myproject';

var crudFunctions = [];

var allResults = {};

module.exports = function(app, url) {
    app.get('/testseed', function(req, res) {
       
       // setup seed database
       var seedArtefacts = [
           {
                title : "An artefact",
                creator : "Test O'Testing",
                subject : "Testing things",
                description : "This is a description of a thing that is being tested now."
           },
           {
                title : "Another artefact",
                creator : "Tester Testerson",
                subject : "A test of many things",
                description : "What a day to be testing things."             
           },
           {
                title : "More artefacts",
                creator : "T. E. Ster",
                subject : "The fast testing of testable things",
                description : "Prolonged sentence about the testing of things that are being tested, by me, the tester."   ,
                hello : "Hi there, I'm now not breaking the schema!"           
           }
       ];
       var seedInstitutionProfile = {
           dates : {
                dateFrom : new Date("2014"),
                dateTo : new Date("2012")
            },
            coordinates : {
                latitude : -47.15,
                longitude : -126.71666666666667,
                addressNumber : "A number or name",
                addressStreetName : "A street",
                addressCity : "A city",
                addressCounty : "A country",
                addressPostcode : "P0 5T"
            },
            keyWords : {
                keyWord : "Word"
            },
            webSites : {
                webSite : "http://www.website.com",
                
            },
            artefacts : {
                artefact : "an artefact"
            }
       };
       
       var seedLocationProfile = {
                coordinates : {
                    latitude : -47.15,
                    longitude : -126.71666666666667,
                    addressNumber : "A number or name",
                    addressStreetName : "A street",
                    addressCity : "A city",
                    addressCounty : "A country",
                    addressPostcode : "P0 5T"
            },
            name : "A name",
            otherNames : "14",
            dates : {
                dateTo : new Date("October 13, 2014 11:13:00"),
                dateFrom : new Date("October 13, 2016 11:13:00")
            }
       };
       
       
       var seedPersonProfile = {
            firstName : "Frank",
            middleNames : "E",
            surnames : "Pabodie",
            birth : {
                date : new Date("April 20, 1947"),
                institution : "An institution"
            },
            death : {
                date : new Date("February 14, 1967"),
                institution : "Another institution"
            },
            address : {
                dates : {
                    dateFrom: new Date("February 14, 1917"),
                    dateTo : new Date("February 14, 1967")
                },
                coordinates : {
                    latitude : -47.15,
                    longitude : -126.71666666666667,
                    addressNumber : "A number or name",
                    addressStreetName : "A street",
                    addressCity : "A city",
                    addressCounty : "A country",
                    addressPostcode : "P0 5T"
                }
         }
       };
       
        MongoClient.connect(url, function(err, db) {
            db.collection('artefacts').drop();
            console.log("dropped");
            
            // db.createCollection('allofthedata');
            
            // Insert multiple documents
            db.collection('artefacts').insertMany(seedArtefacts, function(err, r) {
                assert.equal(null, err);
                assert.equal(3, r.insertedCount);  
                db.close();
            });
            
            MongoClient.connect(url, function(err, db) {         
                // define here which parts of the data should be searchable. Currently limited to the below, should be discussed further.       
                db.collection("artefacts").createIndex( { title : "text", description : "text" }, function(err, result) {                
                });   

                db.close();

            });
                    
        });
       
      res.send("Erm.... done?");
  
});
};