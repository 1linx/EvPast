var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var datesSchema = new Schema({
    dateTo : Date,
    dateFrom : Date
});

var Dates = mongoose.model('Dates', datesSchema);

module.exports = Dates;