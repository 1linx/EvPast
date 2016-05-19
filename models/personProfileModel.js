var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var personProfileSchema = new Schema({
    firstName : {type: String, index: true},
    middleNames : String,
    surnames : String,
    maidenName : String,
    birth : {
        date : Date,
        institution : String
    },
    death : {
        date : Date,
        institution : String
    },
    employment : {
        dates : {
            dateFrom: Date,
            dateTo : Date
        },
        institution : String,
        position : String
    },
    education : {
        dates : {
            dateFrom: Date,
            dateTo : Date
        },
        institution : String,
        qualifications : String
    },
    address : {
        dates : {
            dateFrom: Date,
            dateTo : Date
        },
        coordinates : {
            latitude : Number,
            longitude : Number,
            addressNumber : String,
            addressStreetName : String,
            addressCity : String,
            addressCounty : String,
            addressPostcode : String
        }
    }
});

var PersonProfiles = mongoose.model('personProfiles', personProfileSchema);

module.exports = PersonProfiles;