const asyncHandler = require('express-async-handler')

const Vehicle = require('../models/vehicleModel')

// @desc     Get goals
// @route    Get /api/vehciles
// @access   Private
const getVehicle = asyncHandler(async (req, res) => {
    const vehicles = await Vehicle.find()

    res.status(200).json(vehicles)
})

// @desc     Set goals
// @route    POST /api/vehicles
// @access   Private
const setVehicle = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const vehicle = await Vehicle.create({
        make: req.body.text,
    })
    res.status(200).json(vehicle)
})

// @desc     Update goals
// @route    PUT /api/vehicles/:id
// @access   Private
const updateVehicle = asyncHandler(async (req, res) => {

    const vehicle = await Vehicle.findById(req.params.id)

    if (!vehicle) {
        res.status(400)
        throw new Error("Vehicle not found")
    }

    const updatedVehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updateVehicle)
})

// @desc     Delete goals
// @route    DELETE /api/vehicles/:id
// @access   Private
const deleteVehicle = asyncHandler(async (req, res) => {

    const vehicle = await Vehicle.findById(req.params.id)

    if (!vehicle) {
        res.status(400)
        throw new Error("Vehicle not found")
    }

    await vehicle.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getVehicle,
    setVehicle,
    updateVehicle,
    deleteVehicle,
}
