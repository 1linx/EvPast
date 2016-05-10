var bodyParser = require('body-parser');

var Artefacts = require('../models/artefactModel');
var Institutions = require('../models/institutionProfileModel');
var Locations = require('../models/locationProfileModel');
var Persons = require('../models/personProfileModel');

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.get('/', function(req, res) { 
                res.render("index");
    });
        
    app.get('/artefacts', function(req, res) { 
            Artefacts.find(function(err, artefacts) {
                if (err) throw err;
                res.render('Artefact', { serverContent : artefacts });
            });        
    });
    
    app.post('/artefacts', function(req, res) { 
           Artefacts.create(req.body, function(err, results) {
                if (err) throw err;    
                Artefacts.find(function(err, artefacts) {
                    if (err) throw err;
                    res.render('Artefact', { serverContent : artefacts });
                });                         
            });       
    });
        
    app.get('/institutions', function(req, res) { 
            Institutions.find(function(err, institutions) {
                if (err) throw err;
                res.render('Institution', { serverContent : institutions });
            });        
    });
    
        
    app.post('/institutions', function(req, res) { 
           Institutions.create(req.body, function(err, results) {
               console.log(req.body);               
                if (err) throw err;    
                Institutions.find(function(err, institutions) {
                    if (err) throw err;
                    res.render('Institution', { serverContent : institutions });
                });                         
            });       
    });
        
    app.get('/locations', function(req, res) { 
            Locations.find(function(err, locations) {
                if (err) throw err;
                res.render('Location', { serverContent : locations });
            });        
    });
            
    app.post('/locations', function(req, res) { 
           Locations.create(req.body, function(err, results) {
                if (err) throw err;    
                Locations.find(function(err, locations) {
                    if (err) throw err;
                    res.render('Location', { serverContent : locations });
                });                         
            });       
    });
        
    app.get('/persons', function(req, res) { 
            Persons.find(function(err, persons) {
                if (err) throw err;
                // console.log(persons);
                res.render('Person', { serverContent : persons });
            });        
    });
    
                
    app.post('/persons', function(req, res) { 
           Persons.create(req.body, function(err, results) {
               console.log(req.body);
                if (err) throw err;    
                Persons.find(function(err, persons) {
                    if (err) throw err;
                    res.render('Person', { serverContent : persons });
                });                         
            });       
    });
    
        
    app.get('/create', function(req, res) { 
        res.render('create/');          
    });    
        
    app.get('/create/artefact', function(req, res) { 
        res.render('create/Artefact');
    });       
        
    app.get('/create/location', function(req, res) { 
        res.render('create/Location');
    });       
        
    app.get('/create/institution', function(req, res) { 
        res.render('create/Institution');
    });        
        
    app.get('/create/person', function(req, res) { 
        res.render('create/Person');
    });    
      
};