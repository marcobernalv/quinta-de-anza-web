import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Benefits from './components/Benefits'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Benefits />
        <Gallery />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
