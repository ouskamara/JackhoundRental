const mongoose = require('mongoose')

const vehicleSchema = mongoose.Schema({
    make: {
        type: String,
        trim: true,
        required: [true, "Please add a make value"]
    },
    model: {
        type: String,
        trim: true,
        required: [true, "Please add an model"],
    },
    type: {
        type: String,
        required: [true, "Please add an type"],
        trim: true
    },
    dailyRentalRate: {
        type: Number,
        required: [true, "Please add an rental rate"],
        min: 0,
        max: 300,
        trim: true
    },
    stock: {
        type: Number,
        default: 2
    },
    sales: {
        type: Number,
        default: 0
    }
},
    {
        timestamps: true

    })

module.exports = mongoose.model('Vehicle', vehicleSchema)

 // salesPerMonth:[
    //     {
    //         sales:{
    //             type:Number,
    //             default:0,
    //         },
    //         month:{type:Number,default}
    //     }
    // ]