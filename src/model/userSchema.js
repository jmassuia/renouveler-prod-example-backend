const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    date: String 
});

module.exports = mongoose.model('User',userSchema);