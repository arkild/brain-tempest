const mongoose = require("mongoose");

//My plan is to add other lines to this schema like name, favorite color, favorite number, but until I figure out JWT completely, I don't want to stray too far from what will work and be required to pass/graduate.
const UserSchema = new mongoose.Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, minlength: 6, required: true}
})

module.exports = mongoose.model('User', UserSchema)