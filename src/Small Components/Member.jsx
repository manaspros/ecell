import React from 'react'
import './Member.css'
import Insta from './Icons/insta.jsx'
import LinkedIn from './Icons/LinkedIn.jsx'

function App({source, name, position, insta, In}){
  return (
    <div className='member'>
      <div className="photo">
        <img src={source} alt="Photo" />
      </div>

      <div className="details">
        <h2>{name}</h2>

        <div className="name">
          <h3>{position}</h3>

          <Insta Link={insta} />
          <LinkedIn LinkedIn={In} />
        </div>
      </div>
    </div>
  )
}

export default App