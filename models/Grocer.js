var mongoose = require('mongoose');

var grocerSchema = new mongoose.Schema({
    name: { type: String, default: '' }
});

module.exports = mongoose.model('Grocer', grocerSchema);