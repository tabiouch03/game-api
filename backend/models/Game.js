const mongoose = require('mongoose');

const GameSchema = mongoose.Schema({
    name: {type: String, required: true},
    genre: {type: String, required: true},
    cover: {type: String, required: true},
    prix: {type: Number, required: true}
});

module.exports = mongoose.model('Game', GameSchema);