import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero'
import Footer from './Footer.jsx'
import './Home.css';
import Gallery from './gallery.jsx';

function Home() {
  return (
    <div className='main'>
      <div className="full">
        <Navbar/>
        <Hero />
        <Gallery/>
      </div>
      <Footer/>
      
    </div>
  );
}

export default Home