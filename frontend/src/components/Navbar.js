// import { BiMenu } from 'react-icons/bi'
import { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import "../styling/header.css"
// import './header.css'
// import styling from '../styling/header.css'
import React from 'react'


function Navbar() {
    const [iconLinks, setIconLinks] = useState(false)

    const toggleNavbar = () => {
        setIconLinks(!iconLinks)
    }

    return (
        <div className='navbar'>
            <div className='leftSide' id={iconLinks ? "open" : "close"}>
                <h1>JackHound Rentals</h1>
                <div className='hiddenLinks'>
                    <Link to='/'>Home</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                    <Link to='/vehiclelist'>Vehicle List</Link>
                    <Link to='/reservation'>Reservation</Link>

                </div>
            </div>
            <div className='rightSide'>

                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                <Link to='/vehiclelist'>Vehicle List</Link>
                <Link to='/reservation'>Reservation</Link>

                <button onClick={toggleNavbar}>
                    <MenuIcon />
                </button>

            </div>

        </div>


    )
}

export default Navbar