import { useState, useEffect } from 'react'
import { HiUserAdd } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import React from 'react'
import "../styling/registration.css"


function Register() {
    const [formData, setFormData] = useState({

        email: '',
        password: '',

    })

    const { name, email, password, password2 } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        axios.post('/api/users', formData)
            .then(res => console.log(res.data));
        window.location = '/vehiclelist'
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <HiUserAdd /> Register
                </h1>
                <p>Please create an account</p>
            </section>

            <section className="registration-form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control"
                            id="name"
                            name="name"
                            value={name}
                            placeholder='Enter your name'
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
                        <input type="password" className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            placeholder='Enter your password'
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control"
                            id="password2"
                            name="password2"
                            value={password2}
                            placeholder='Confirm password'
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <button type='submit' className='btn btn-block'>
                            Register now
                        </button>
                    </div>

                </form>
            </section>

        </>
    )
}

export default Register