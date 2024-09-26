import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/highlights.css'
import wsp1 from '../../assets/wsp1.png'
import wsp2 from '../../assets/wsp2.png'
import wsp3 from '../../assets/wsp3.png'

const highlights = [
  {
    imgSrc: wsp1,
    imgAlt: "Week's special Image 1",
    dishName: "Greek salad",
    dishPrice: "10.99",
  },
  {
    imgSrc: wsp2,
    imgAlt: "Week's special Image 2",
    dishName: "Bruchetta",
    dishPrice: "5.99",
  },
  {
    imgSrc: wsp3,
    imgAlt: "Week's special Image 3",
    dishName: "Lemon Dessert",
    dishPrice: "5.00",
  },
];

export default function Highlights() {
  return (
        <section id='highlights'>
          <div id='hintro'>
            <h3>This weeks specials!</h3>
            <button><Link to="/bookings">Online Menu</Link></button>
          </div>

          <div id="wsp_dishes">
            {highlights && highlights.map(highlight => (
              <div key={highlight.dishName} className='dishes'>
                <img src={highlight.imgSrc} alt={highlight.imgAlt} />
                <div className='dish-names'>
                  <p>{highlight.dishName}</p>
                  <span>$ {highlight.dishPrice}</span>
                </div>
                <p>Lorem ipsum dolor sit amet, illum vituperata id mea, eius phaedrum eu duo. Te maiorum gloriatur sea.</p>
                <div className='order'>
                  <p>Order a delivery</p>
                  <span>&</span>
                </div>
              </div>
            ))}
          </div>
        </section>
  )
}
