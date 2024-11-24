import React from 'react'
import Button from './Button'
import './Navstyle.css'
import { Link } from 'react-router-dom';

function Navbar() {
  
  return (
    <div className="navbar">
      <Link to="/" className='Logo'>
        <img src="/Money_Matters.png" alt="Logo" />
      </Link>

      <div className="menu">
        <Button text="Home" url="/" />
        <Button text="Events" url="/Events" />
        <Button text="Gallery" url="/Gallery" />
        <Button text="Team" url="/Team" />
        <Button text="About" url="/About" />
      </div>
    </div>
  );
}

export default Navbar