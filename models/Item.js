var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
    name: { type: String, default: '' }
});

module.exports = mongoose.model('Item', itemSchema);