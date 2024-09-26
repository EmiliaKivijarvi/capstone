import React from 'react'
import Hero from './homepage/Hero';
import Highlights from './homepage/Highlights';
import Testimonials from './homepage/Testimonials';
import About from './homepage/About';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  )
}
