import Button from './Button'
import Home from '../Home';
import About from '../About';
import './Navstyle.css'
import React, { useRef } from 'react';

function Navbar() {
  const homeRef = useRef(null);
  const eventsRef = useRef(null);
  const galleryRef = useRef(null);
  const teamRef = useRef(null);
  const aboutRef = useRef(null);

  // Scroll handler
  // const scrollToSection = (ref) => {
  //   if (ref.current) {
  //     ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // };
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="navbar">
      <a href="/" className='Logo'>
        <img src="/Money_Matters.png" alt="Logo" />
      </a>

      <div className="menu">
        {/* <button onClick={() => scrollToSection(homeRef)}>Home</button>
        <button onClick={() => scrollToSection(eventsRef)}>Events</button>
        <button onClick={() => scrollToSection(galleryRef)}>Gallery</button>
        <button onClick={() => scrollToSection(teamRef)}>Team</button>
        <button onClick={() => scrollToSection(aboutRef)}>About</button> */}

        <button onClick={() => scrollToSection('home-section')}>Home</button>
        <button onClick={() => scrollToSection('about-section')}>About</button>
        <button onClick={() => scrollToSection('team-section')}>Team</button>
        <button onClick={() => scrollToSection('gallery-section')}>Gallery</button>
        <button onClick={() => scrollToSection('footer-section')}>Contact</button>
        {/* <button onClick={() => scrollToSection('contact-section')}>Contact</button> */}

        {/* <Button text="Home" url="/" onClick={() => scrollToSection(homeRef)} />
        <Button text="Events" url="/events" onClick={() => scrollToSection(eventsRef)} />
        <Button text="Gallery" url="/gallery" onClick={() => scrollToSection(galleryRef)} />
        <Button text="Team" url="/team" onClick={() => scrollToSection(teamRef)} />
        <Button text="About" url="/about" onClick={() => scrollToSection(aboutRef)} /> */}
      </div>
      {/* <div ref={homeRef}><Home /></div> */}
      {/* <div ref={eventsRef}><Events /></div> */}
      {/* <div ref={galleryRef}><Gallery /></div> */}
      {/* <div ref={teamRef}><Team /></div> */}
      {/* <Home ref={homeRef}/> */}
      {/* <About ref={aboutRef} /> */}
    </div>
  );
}

export default Navbar