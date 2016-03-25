var Artefacts = require('../models/artefactModel');

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
       Artefacts.remove({}, function(err){
           if (err) throw err;
           Artefacts.create(seedArtefacts, function(err, results) {
           if (err) throw err;               
           res.send("All cleared up. Reseeding data:" + results);
           
       });
       });
       
        
    });
       
}