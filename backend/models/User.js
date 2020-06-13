const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: {type: String, required: true, index: { unique: true }},
    password: {type: String, required: true},
    name: {type: String, required: true},
    photoProfil: {type: String, required: false},
    isAdmin: {type: Boolean, required: true}
});

module.exports = mongoose.model('User', UserSchema);