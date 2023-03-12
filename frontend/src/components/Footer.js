import React from 'react'
import { BsInstagram } from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import { BsYoutube } from "react-icons/bs"
import "../styling/footer.css"


function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'> <BsInstagram /> <BsFacebook /> <BsYoutube /> <BsTwitter />

            </div>
            <p>&copy; 2021 JackHoundRentals.com</p>
        </div>
    )
}

export default Footer