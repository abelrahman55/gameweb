import './discovercard.css';
import React from 'react'
import { Link } from 'react-router-dom';
import autherimage from '../../../../images/author.jpg';
const DiscoverCard = ({disdata}) => {
  return (
    <div className='discovercard'>
      <div className="discard-image">
        <img src={disdata.image} alt="" />
        <img src={autherimage} alt="" className='auther'/>
      </div>
      <h2 className='title'>
        {disdata.title}
      </h2>
      <div className="card-info">
        <div className="current">
          <h4>Current Bid</h4>
          <p>{disdata.current_bid}</p>
          <p>{disdata.current_type}</p>
        </div>
        <div className="end">
          <h4>Ends In</h4>
          <p>{disdata.end}</p>
        </div>
      </div>
      <Link to={'/detail'}>View Details</Link>
    </div>
  )
}

export default DiscoverCard