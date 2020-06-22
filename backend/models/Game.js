const mongoose = require('mongoose');

const GameSchema = mongoose.Schema({
    name: {type: String, required: true},
    genre: {type: String, required: true},
    cover: {type: String, required: true},
    prix: {type: Number, required: true},
    description: {type: String, required: true},
    description2: {type: String},
    video: {type: String},
    created_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Game', GameSchema);