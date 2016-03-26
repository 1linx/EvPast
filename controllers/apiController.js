var Artefacts = require('../models/artefactModel');
var Coordinates = require('../models/coordinatesModel');
var InstitutionProfile = require('../models/institutionProfileModel');
var bodyParser = require('body-parser');

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.get('/', function(req, res) { 
            console.log(InstitutionProfile.dates);
                          
            res.send("Afternoon, chief.");        
    });
    
    app.get('/api/artefacts/:username', function(req, res) {
        Artefacts.find({ username: req.params.username }, function(err, artefacts) {
            if (err) throw err;
            
            res.send(artefacts);
        });
    });
    
    app.get('/api/artefact/:id', function(req, res) {
        Artefacts.findById({ _id: req.params.id }, function(err, artefact) {
            if (err) throw err;
            
            res.send(artefact);
        });
    });
    
    app.post('/api/artefact', function(req, res) {
        if (req.body.id) {
            Artefacts.findByIdAndUpdate(req.body.id, {
                artefact: req.body.artefact, 
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, function(err, artefact) {
                if (err) throw err;
                res.send("Success!");
            });
        } else {
            var newArtefact = Artefacts({
                username: "test",
                artefact: req.body.artefact,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            newArtefacts.save(function(err) {
                if (err) throw err;
                res.send('Success!');
            });
        }
    });
    
    app.delete('/api/artefact', function(req, res) {
        Artefacts.findByIdAndRemove(req.body.id, function(err) {
            if (err) throw err;
            res.send('Success!');
        });
    });
}