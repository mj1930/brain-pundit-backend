var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/locations');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

module.exports = db;