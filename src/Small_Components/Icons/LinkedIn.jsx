import React from 'react';
import './Icon.css';

function Icon({LinkedIn}) {
  return (
    <a target='blank' href={LinkedIn}>
      <img src="/linkedin.png" alt="" className="icon2" />
    </a>
  );
}

export default Icon;
