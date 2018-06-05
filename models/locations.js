var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Locations = Schema({
    location: {
        type: String
    },
    news: [
        {
            title: String,
            url: String,
            description: String,
            urlToImage: String
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    modifiedAt: {
        type: Date,
        default: Date.now()
    },
    lat: {
        type: Number
    },
    lng: {
        type: Number
    }
})

module.exports = mongoose.model('locations', Locations);