import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
import logo from '../assets/logo.png'

export default function Header() {
        const [mdnav, setMdnav] = useState(false);

        const toggleMdnav = () => setMdnav(!mdnav);

  return (
        <header id='header'>
                <div><img id="nav_logo" src={logo} alt="little lemon logo" /></div>
                <nav>
                        <div id='menu' onClick={toggleMdnav}>
                                <hr />
                                <hr />
                                <hr />
                        </div>
                        <ul id='lg-nav'>
                                <li><Link to="/">Home</Link></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#highlights">Menu</a></li>
                                <li><Link to="/bookings">Reservations</Link></li>
                                <li><Link to="/">Order Online</Link></li>
                                <li><Link to="/">Login</Link></li>
                        </ul>

                        <div id="md-nav" style={{display: mdnav ? 'block' : 'none'}}>
                                <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#highlights">Menu</a></li>
                                        <li><Link to="/bookings">Reservations</Link></li>
                                        <li><Link to="/">Order Online</Link></li>
                                        <li><Link to="/">Login</Link></li>
                                </ul>
                                <div id='close' onClick={toggleMdnav}>X</div>
                        </div>
                </nav>
        </header>
  )
}
