var Artefacts = require('../models/artefactModel');
var InstitutionProfile = require('../models/institutionProfileModel');
var LocationProfile = require('../models/locationProfileModel');
var PersonProfile = require('../models/personProfileModel');
var async = require('async');

var allResults = {};

module.exports = function(app) {
    app.get('/api/setup', function(req, res) {
       
       //seed databse
       var seedArtefacts = [
           {
                title : "A dummy artefact",
                creator : "Test O'Testing",
                subject : "Testing things",
                description : "This is a description of a thing that is being tested."
           },
           {
                title : "Another dummy artefact",
                creator : "Tester Testerson",
                subject : "A test of many things",
                description : "What a day to be testing things."             
           },
           {
                title : "More dummy artefacts",
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
                addressNumber : "1",
                addressStreetName : "House of Cthulhu",
                addressCity : "R'lyeh",
                addressCounty : "South Pacific",
                addressPostcode : "IA 1A"
            },
            keyWords : {
                keyWord : "F'tagn"
            },
            webSites : {
                webSite : "http://www.chaosium.com",
                
            },
            artefacts : {
                artefact : "Necronomicon"
            }
       };
       
       var seedLocationProfile = {
                coordinates : {
                latitude : -47.15,
                longitude : -126.71666666666667,
                addressNumber : "1",
                addressStreetName : "House of Cthulhu",
                addressCity : "R'lyeh",
                addressCounty : "South Pacific",
                addressPostcode : "IA 1A"
            },
            name : "The Glebe",
            otherNames : "14",
            dates : {
                dateTo : new Date("October 13, 2014 11:13:00"),
                dateFrom : new Date("October 13, 2016 11:13:00")
            }
       };
       
       
       var seedPersonProfile = {
            firstName : "Frank",
            middleNames : "Eldritch",
            surnames : "Pabodie",
            birth : {
                date : new Date("April 20, 1947"),
                instution : "Our lady in labour"
            },
            death : {
                date : new Date("February 14, 1967"),
                instution : "St Mungo's"
            }
       };
       
       Artefacts.remove({}, function(err){
           if (err) throw err;
           
            Artefacts.create(seedArtefacts, function(err, results) {
                    if (err) throw err;               
                    allResults["artefacts"] = results; 
                    
                    InstitutionProfile.remove({}, function(err){
                        if (err) throw err;
                        
                        InstitutionProfile.create(seedInstitutionProfile, function(err, results) {
                                if (err) throw err;               
                                allResults["institutionProfile"] = results;  
                                
                                    LocationProfile.remove({}, function(err, results) {
                                        if (err) throw err; 
                                        
                                        LocationProfile.create(seedLocationProfile, function(err, results) {
                                            if (err) throw err; 
                                            allResults["locationProfile"] = results;  
                                        
                                            PersonProfile.remove({}, function(err, results) {
                                                if (err) throw err; 
                                                
                                                PersonProfile.create(seedPersonProfile, function(err, results) {
                                                    if (err) throw err; 
                                                    allResults["PersonProfile"] = results;  
                                            
                                                    res.send("All cleared up. Reseeding data:" + allResults.artefacts + allResults.institutionProfile + allResults.locationProfile + allResults.PersonProfile )             
                                                });  
                                            });
                                        });
                                        
                                    });                             
                        });
                    });           
            });
       });
        
    });
  
  
  // make async series instead of that mess above ^^
//   async.series([
//     function(callback){
//         // do some stuff ...
//         callback(null, 'one');
//     },
//     function(callback){
//         // do some more stuff ...
//         callback(null, 'two');
//     }
// ],
// // optional callback
// function(err, results){
//     // results is now equal to ['one', 'two']
// });
  
  
       
};