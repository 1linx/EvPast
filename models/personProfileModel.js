var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var personProfileSchema = new Schema({
    firstName : String,
    middleNames : String,
    surnames : String,
    maidenName : String,
    birth : {
        date : Date,
        instution : String
    },
    death : {
        date : Date,
        instution : String
    },
    employment : {
        dates : {
            dateFrom: Date,
            dateTo : Date
        },
        instution : String,
        position : String
    },
    education : {
        dates : {
            dateFrom: Date,
            dateTo : Date
        },
        instution : String,
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