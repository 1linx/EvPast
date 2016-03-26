var Artefacts = require('../models/artefactModel');
var InstitutionProfile = require('../models/institutionProfileModel')

var allResults = {};

module.exports = function(app) {
    app.get('/api/setupArtefacts', function(req, res) {
       
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
                subject : "The fast testing of silent things",
                description : "Prolonged sentence about the testing of things that are being tested, by me, the tester."               
           }
       ];
       var seedInstitutionProfile = {
           dates : {
                dateFrom : "2008",
                dateTo : "2012"
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
       
       Artefacts.remove({}, function(err){
           if (err) throw err;
           
            Artefacts.create(seedArtefacts, function(err, results) {
                    if (err) throw err;               
                    allResults["artefacts"] = results;             
                    console.log('Done'); 
                    
       
                    InstitutionProfile.remove({}, function(err){
                        if (err) throw err;
                        
                        InstitutionProfile.create(seedInstitutionProfile, function(err, results) {
                                if (err) throw err;               
                                allResults["institutionProfile"] = results;         
                                console.log('Done');   
                                
                                res.send("All cleared up. Reseeding data:" + allResults["artefacts"] + allResults["institutionProfile"] )             
                        });
                    });           
            });
       });
        
    });
       
}