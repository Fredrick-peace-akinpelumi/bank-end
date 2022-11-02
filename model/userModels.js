const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    firstname: {
        type: String,
        reuired: true
    },
    lastname: {
        type: String,
        reuired: true
    },
    email: {
        type: String,
        reuired: true
    },
    phone_number: {
        type: String,
        reuired: true
    },
    password: {
        type: String,
        reuired: true
    }
}, {timestamps:true});
const userModel = mongoose.model('user', userSchema)
module.exports = userModel;