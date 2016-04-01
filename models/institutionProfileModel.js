var mongoose = require('mongoose');

// var dates = require('../models/datesModel');
// var Dates = new dates;
var Schema = mongoose.Schema;

var institutionProfileSchema = new Schema({
    dates : {
        dateTo : Date,
        dateFrom : Date 
    },
    coordinates : {
        latitude : Number,
        longitude : Number,
        addressNumber : String,
        addressStreetName : String,
        addressCity : String,
        addressCounty : String,
        addressPostcode : String
    },
    keyWords : {
        keyWord : String
    },
    webSites : {
        webSite : String,
        
    },
    artefacts : {
        artefact : String
    }

});


var InstitutionProfiles = mongoose.model('InstitutionProfiles', institutionProfileSchema);

module.exports = InstitutionProfiles;