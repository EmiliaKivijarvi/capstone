import React from 'react'
import '../../styles/about.css'
import about_pics from '../../assets/about-pic.png'

export default function About() {
  return (
        <section id='about'>
          <div id="about_text">
            <h1>Little Lemon</h1>
            <p id='a-chicago'>Chicago</p>
            <p id='about-intro'>Lorem ipsum dolor sit amet, illum vituperata id mea, eius phaedrum eu duo. Te maiorum gloriatur sea,  dolor sit amet. Lorem ipsum dolor sit amet, illum vituperata id mea, eius phaedrum eu duo. Te maiorum gloriatur sea,  dolor sit amet. dolor sit amet.</p>
          </div>
          <div id="about_pics">
            <img src={about_pics} alt="About Picture" />
          </div>
        </section>
  )
}
