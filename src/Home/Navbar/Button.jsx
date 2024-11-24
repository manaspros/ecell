import React from 'react'
import { Link } from 'react-router-dom'

function Button({text,url}) {
  return (
    <Link className='Link' to={url}>
      <button>{text}</button>
    </Link>
  );
}

export default Button