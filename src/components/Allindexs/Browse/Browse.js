import './Browse.css';
import React from 'react'
import Bdata from './Browse.json'
const Browse = () => {
  return (
    <div className='browse'>
      <div className='browse-container'>
        <h1 className='title'>
          Browse Through Our Categories Here.
        </h1>
        <div className='browse-icons'>
          {
            Bdata.map((bdata)=>{
              return(
                <div className='icon'>
                  <img src={bdata.icon} alt="plapla" />
                  <h4>{bdata.title}</h4>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Browse