import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero'
import Footer from './Footer.jsx'
import './Home.css';
import Gallery from './gallery.jsx';
import Details from './Details.tsx';
import Card from './Card.tsx';


function Home() {
  return (
    <div className='main'>
      <div className="full">
        <Navbar/>
        <Hero />
        <Details/>
        <Card/>
        <Gallery/>
      </div>
      <Footer/>
      
    </div>
  );
}

export default Home