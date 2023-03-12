const asyncHandler = require('express-async-handler')
const Reservation = require('../models/reservationModel')



const setReservations = asyncHandler(async (req, res) => {
    const { fullname, email, number, deliveryAddress, deliveryDate,
        deliveryTime, pickupAddress, pickupDate, pickupTime } = req.body

    if (!fullname || !email || !number || !deliveryAddress ||
        !deliveryDate || !deliveryTime || !pickupAddress || !pickupDate || !pickupTime) {
        res.status(400)
        throw new Error('Please add all fields');
    }

    const reservations = await Reservation.create({
        fullname,
        email,
        number,
        deliveryAddress,
        deliveryDate,
        deliveryTime,
        pickupAddress,
        pickupDate,
        pickupTime,

    })
    res.status(200).json(reservations)
})



const getReservations = asyncHandler(async (req, res) => {
    const reservations = await Reservation.find()

    res.status(200).json(reservations)
})



const updateReservations = asyncHandler(async (req, res) => {
    const reservation = await Reservation.findById(req.params.id)

    if (!reservation) {
        res.status(400)
        throw new Error('Reservation not found')
    }
    const updatedReservations = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedReservations)
})

const deleteReservations = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete Reservations ${req.params.id}` })
})

module.exports = {
    getReservations,
    setReservations,
    updateReservations,
    deleteReservations
}