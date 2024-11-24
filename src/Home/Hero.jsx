import "./Hero.css";
import React, { useRef } from "react";

function Hero() {
  const sectionRef = useRef(null);

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
    <div className="mainn">
      {/* <Navbar /> */}
      <div className="hero">
        <div className="text1">
          <div className="wel">
            Welcome to<h1 className="nameclub">MONEY MATTERS</h1>
          </div>

          <div className="iiit">The Financial Club Of IIIT Naya Raipur</div>

          <div className="quote">
            Where <span className="green"> Education</span> Meets{" "}
            <span className="green">Financial Empowerment</span>
          </div>

          <div className="outerzerodha">
            <h2 className="collab">IN COLLABORATION WITH</h2>
            <img src="./Zerodha_logo_1.png" alt="" className="zerodha" />
          </div>
          
        </div>
        
        <img src="/bgg.png" alt="" className="theme" />

        <button onClick={() => scrollToSection('about-section')} className="explore">
          {/* <Button url="/About"/> */}
          <img src="/explore.png" alt="" />
        </button>
      </div>
      {/* <About ref={sectionRef} /> */}
    </div>
  );
}

export default Hero;