var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var coordinatesSchema = new Schema({
    latitude : Number,
    longitude : Number,
    addressNumber : String,
    addressStreetName : String,
    addressCity : String,
    addressCounty : String,
    addressPostcode : String


});

var Coordinates = mongoose.model('Coordinates', coordinatesSchema);

module.exports = Coordinates;