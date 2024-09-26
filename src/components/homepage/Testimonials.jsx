import React from 'react'
import '../../styles/testimonials.css'
import tt1 from '../../assets/tt1.jpg'
import tt2 from '../../assets/tt2.jpg'
import tt3 from '../../assets/tt3.jpg'
import stars from '../../assets/stars.png';

const testimonials = [
  {
    imgSrc: tt1,
    imgAlt: "Testimonial 1",
    ttComment: "Great service!",
    ttName: "Lena",
  },
  {
    imgSrc: tt2,
    imgAlt: "Testimonial 2",
    ttComment: "It was amazing! I will come again soon.",
    ttName: "Brian",
  },
  {
    imgSrc: tt3,
    imgAlt: "Testimonial 3",
    ttComment: "Very nice service.",
    ttName: "John",
  },
];

export default function Testimonials() {
  return (
        <section id='testimonials'>
          <h4>Testimonials</h4>
          <div id='tts'>
            {testimonials && testimonials.map(testimonial => (
              <div key={testimonial.imgSrc}>
                <div>
                  <p className='rating'><img src={stars} alt="stars"></img></p>
                  <img src={testimonial.imgSrc} alt={testimonial.imgAlt} />
                  <p className='name'>{testimonial.ttName}</p>
                  <p>{testimonial.ttComment}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
  )
}
