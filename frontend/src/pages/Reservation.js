import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Reservation() {



    const [reservationData, setReservationData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        age: '',
        phoneNumber: '',
        pickuplocation: '',
        dropofflocation: '',
        pickupdate: '',
        dropoffdate: '',
        pickuptime: '',
        dropofftime: '',

        comments: ''


    })

    const { firstname,
        lastname,
        email,
        age,
        phoneNumber,
        pickuplocation,
        dropofflocation,
        pickupdate,
        dropoffdate,
        pickuptime,
        dropofftime,

        comments } = reservationData

    const onChange = (e) => {
        setReservationData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(reservationData);
        axios.post('/api/reservations', reservationData)
            .then(res => console.log(res.data));
        window.location = '/vehiclelist'
    }

    return (
        <section className="form">
            <form onSubmit={onSubmit}>

                <div className="form-group">
                    <input type="text" className="form-control"
                        id="firstname"
                        name="firstname"
                        value={firstname}
                        placeholder='Enter your fistname'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control"
                        id="lastname"
                        name="lastname"
                        value={lastname}
                        placeholder='Enter your lastname'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        placeholder='Enter your email'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input type="number" className="form-control"
                        id="age"
                        name="age"
                        value={age}
                        placeholder='Enter your age'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input type="number" className="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={phoneNumber}
                        placeholder='Enter your phone number'
                        onChange={onChange}
                    />
                </div>






                <div className="form-group">
                    <button type='submit' className='btn btn-block'>
                        Submit
                    </button>
                </div>

            </form>
        </section>
    )
}

export default Reservation