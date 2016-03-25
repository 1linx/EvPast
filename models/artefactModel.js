var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var artefactSchema = new Schema({
    title : String,
    creator : String,
    subject : String,
    description : String,
    publisher : String,
    contributor : String,
    date : Date,
    type : String,
    format : String,
    identifier : String,
    source : String,
    language : String,
    relation : String,
    coverage : String,
    rights : String

});

var Artefacts = mongoose.model('Artefacts', artefactSchema);

module.exports = Artefacts;