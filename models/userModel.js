const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim : true
    }, 
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, 'Email address is required'],
        // validate: [validateEmail, 'Please fill a valid email address']
    },
    number: {
        type: Number,
        required: true,
        maxlength: 10,
        minlength: 10
    },
    website: {
        type: String,
        trim: true
    }
});
const User = mongoose.model('User', userSchema);
module.exports = User;