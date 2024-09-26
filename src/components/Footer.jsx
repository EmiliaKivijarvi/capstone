import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'
import footlg from '../assets/footlg.png'

export default function Footer() {
  return (
        <footer>
                <div id='ftimg'><img src={footlg} alt="footer logo" /></div>
                <div id='doormat'>
                        <p id="otsikko">Doormat</p>
                        <p><a href="#header">Navigation</a></p>
                        <p><Link to="/">Home</Link></p>
                        <p><a href="#about">About</a></p>
                        <p><a href="#highlights">Menu</a></p>
                        <p><Link to="/bookings">Reservations</Link></p>
                        <p><Link to="/bookings">Order Online</Link></p>
                        <p><Link to="/">Login</Link></p>
                </div>
                <div id='contact'>
                        <p id="otsikko">Contact</p>
                        <p></p>
                        <p>Address</p>
                        <p>Phone Number</p>
                        <p>Email</p>
                </div>
                <div id='smedia'>
                        <p id="otsikko">Social Media Links</p>
                        <p></p>
                        <p>Address</p>
                        <p>Phone Number</p>
                        <p>Email</p>
                </div>
        </footer>
  )
}
