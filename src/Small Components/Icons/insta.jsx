import React from 'react';
import './Icon.css'

function Icon({Link}) {
  return (
    <a target='blank' href={Link}>
      <img className='icon1' src="/insta.png" alt="Instagram" />
    </a>
  );
}

export default Icon;
