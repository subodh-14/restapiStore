const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name:String,
    price:Number
 
})

const User = mongoose.model('user',userSchema);

module.exports = User;