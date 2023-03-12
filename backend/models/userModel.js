const mongoose = require('mongoose')

const userScehma = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please add a name"],
        trim: true
    },
    lastname: {
        type: String,
        required: [true, "Please add a name"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please add an email"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please add a password"]
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model('User', userScehma)