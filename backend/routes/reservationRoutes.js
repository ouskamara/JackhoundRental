const express = require('express')
const router = express.Router()
const { getReservations, setReservations, updateReservations, deleteReservations }
    = require('../controllers/reservationController')




router.get('/', getReservations)

router.post('/', setReservations)

router.put('/:id', updateReservations)

router.delete('/:id', deleteReservations)


module.exports = router