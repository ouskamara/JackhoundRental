import "../styling/home.css"

import BannerImage from "../assets/bmwm3.jpg"
import React from 'react'

function Dashboard() {
    return (
        <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className='headerContainer'
            >
                <h1>Jackhound Rentals</h1>
            </div>
        </div>
    )
}

export default Dashboard