import './explor.css'
import React from 'react'
import Swipper from './Swipper/Swipper'
const Explore = () => {
  return (
    <div className='explore'>
      <div className='explore-container'>
        <h1>Explore Some Hot Collections In Market.</h1>
        <Swipper/>
      </div>
    </div>
  )
}

export default Explore