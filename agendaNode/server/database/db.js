const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/agenda_db');
module.exports = mongoose;
