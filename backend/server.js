const express = require('express')
// const cors = require('cors')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

// const whitelist = ["http://localhost:3000"]
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (!origin || whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error("Not allowed by CORS"))
//         }
//     },
//     credentials: true,
// }
// app.use(cors(corsOptions))



app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/vehicles', require('./routes/vehicleRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/reservations', require('./routes/reservationRoutes'))


// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))

