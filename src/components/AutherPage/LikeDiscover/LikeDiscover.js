import './likediscover.css';
import React from 'react'
import Discoverdata from '../../Explorepage/Discover/Discover.json';
import DiscoverCard from '../../Explorepage/Discover/DiscoverCard/DiscoverCard';
const LikeDiscover = () => {
  return (
    <div className='likediscover'>
      <div className="likediscover-header">
        <h1>Melanie Smith’s Items.</h1>
      </div>
      <div className="discover-content-row">
        {
          Discoverdata.map((disdata)=>{
          return  <DiscoverCard disdata={disdata}/>
          })
        }
      </div>
    </div>
  )
}

export default LikeDiscover