var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var locationProfileSchema = new Schema({
    coordinates : {
        latitude : Number,
        longitude : Number,
        addressNumber : String,
        addressStreetName : String,
        addressCity : String,
        addressCounty : String,
        addressPostcode : String
    },
    name : String,
    otherNames : String,
    dates : {
         dateTo : Date,
         dateFrom : Date
    }
});

var LocationProfiles = mongoose.model('locationProfiles', locationProfileSchema);

module.exports = LocationProfiles;