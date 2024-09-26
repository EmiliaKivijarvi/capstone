import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/confirmedBooking.css'

export default function ConfirmedBooking() {
  return (
    <>
      <main id='cbks'>
        <p id='con'>Congratulations!</p>
        <p id='cmsg'>You have successfully booked a spot at Little Lemon Restuarant.</p>
        <button><Link to="/">Go Back Home</Link></button>
      </main>
    </>
  )
}
