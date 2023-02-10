import './currentbiddingcard.css';
import React from 'react'

const CurrentBidddingCard = ({curdata}) => {
  return (
    <div className='currentcard'>
      <div className="currentcard-image">
        <img src={curdata.image} alt="" />
      </div>
      <div className="currentcard-information">
        <div className="perinfo-top">
          <h3 className='name'>{curdata.name}</h3>
          <p className='site'>{curdata.site}</p>
        </div>
        <div className="perinfo-bottom">
          <h4 className='bid'>Bid: <span>{curdata.bid}</span></h4>
          <p className='date'>{curdata.date}</p>
          <p className='time'>{curdata.time}</p>
        </div>
      </div>
    </div>
  )
}

export default CurrentBidddingCard