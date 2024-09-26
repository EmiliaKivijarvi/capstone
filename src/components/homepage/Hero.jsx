import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/hero.css'
import hero_img from '../../assets/hero-img.png'

export default function Hero() {
  return (
        <section id='hero'>
          <div id='hero_intro'>
            <h1>Little Lemon</h1>
            <p id='chicago'>Chicago</p>
            <p id='res-intro'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button><Link to="/bookings">Reserve a table</Link></button>
          </div>
          <div><img id='hero_img' src={hero_img} alt="hero image" /></div>
        </section>
  )
}
