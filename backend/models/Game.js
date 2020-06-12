const mongoose = require('mongoose');

const GameSchema = mongoose.Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    genre: {type: String, required: true},
    cover: {type: String, required: true},
    prix: {type: Number, required: true}
});

module.exports = mongoose.model('Game', GameSchema);