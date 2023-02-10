import './discover.css';
import React from 'react'
import DiscoverData from './Discover.json';
import DiscoverCard from './DiscoverCard/DiscoverCard';
const Discove = () => {
  return (
    <div className='discover'>
        <div className="discover-header">
          <h1>Discover Some Of Our Items.</h1>
        </div>
        <div className="discover-content-row">
          {
            DiscoverData.map((disdata)=>{
              return(
                <DiscoverCard disdata={disdata} key={disdata.id}/>
              )
            })
          }
        </div>
    </div>
  )
}

export default Discove