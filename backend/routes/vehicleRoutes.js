const express = require('express')
const router = express.Router()
const {
    getVehicle,
    setVehicle,
    updateVehicle,
    deleteVehicle,
} = require('../controllers/vehicleController')

router.route('/').get(getVehicle).post(setVehicle)
router.route('/:id').delete(deleteVehicle).put(updateVehicle)

// router.get('/', getVehicle)
// router.post('/', setVehicle)
// router.put('/:id', updateVehicle)
// router.delete('/:id', deleteVehicle)

module.exports = router