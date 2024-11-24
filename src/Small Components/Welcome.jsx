import React from 'react'
import './Welcome.css'

function Welcome({text}) {
  return (
    <div className="h1">
        <h1>{text}</h1>
    </div>
  )
}

export default Welcome