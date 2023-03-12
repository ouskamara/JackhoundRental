const mongoose = require('mongoose')

const reservationSchema = mongoose.Schema({
    fullname: {
        type: String,
        trim: true
    },
    email: {
        type: String,
    },

    number: {
        type: Number,
    },
    deliveryAddress: {
        type: String,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true
    },
    deliveryTime: {
        type: String,
        required: true,
    },
    pickupAddress: {
        type: String,
        required: true,
    },
    pickupDate: {
        type: Date,
        required: true,
    },
    pickupTime: {
        type: String,
        required: true
    }


}, {
    timestamps: true,
})


module.exports = mongoose.model('Reservation', reservationSchema)