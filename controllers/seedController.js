var async = require('async');

var Artefacts = require('../models/artefactModel');
var InstitutionProfile = require('../models/institutionProfileModel');
var LocationProfile = require('../models/locationProfileModel');
var PersonProfile = require('../models/personProfileModel');

var allResults = {};

module.exports = function(app) {
    app.get('/api/setup', function(req, res) {
       
       //seed database
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
                hello : "Hi there, I'm breaking the schema!"           
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
       
    
  // async call to clear and reseed the database.
    async.series([
        function(callback){        
        Artefacts.remove({}, function(err){
            if (err) throw err;
        });
        callback(null, 'Artefacts collection cleared');
        },
        function(callback){
            Artefacts.create(seedArtefacts, function(err, results) {
                if (err) throw err;               
                allResults.artefacts = results; 
            });
            callback(null, 'Artefacts collection reseeded');
        },
        function(callback){
            InstitutionProfile.remove({}, function(err){
                if (err) throw err;
            });
            callback(null, 'Institution collection cleared');
        },
        function(callback){
            InstitutionProfile.create(seedInstitutionProfile, function(err, results) {
                if (err) throw err;               
                allResults.institutionProfile = results;  
            });
            callback(null, 'Institution collection reseeded');
        },
        function(callback){
            LocationProfile.remove({}, function(err, results) {
                if (err) throw err;
            });
            callback(null, 'Location collection cleared');
        },
        function(callback){
            LocationProfile.create(seedLocationProfile, function(err, results) {
                if (err) throw err; 
                allResults.locationProfile = results;  
            });
            callback(null, 'Location collection reseeded');
        },
        function(callback){
            PersonProfile.remove({}, function(err, results) {
                if (err) throw err; 
            });
            callback(null, 'Person collection cleared');
        },
        function(callback){
            PersonProfile.create(seedPersonProfile, function(err, results) {
                if (err) throw err; 
                allResults.PersonProfile = results;  
            });
            callback(null, 'Person collection cleared');
        },
        // this could be better handled array parse by client-side
        function(callback){
            setTimeout(function() { 
                res.send("All cleared up now. Reseeding data:" + allResults.artefacts + allResults.institutionProfile + allResults.locationProfile + allResults.PersonProfile );   
            }, 3000);            
            callback(null, 'All done');
        }   
     
    ],
    // optional callback
    function(err, results){
        for (var item in results) {
        console.log(results);
        }
    });
});
};