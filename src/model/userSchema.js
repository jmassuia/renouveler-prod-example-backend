const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    email: {
        type:String,
        unique:true,
        trim:true
    },
    phone: {
        type:String,
    },
    createdAt: Date
});

module.exports = mongoose.model('User',userSchema);