const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/trellower');

var db = mongoose.connection;



module.exports = Object.assign(db);