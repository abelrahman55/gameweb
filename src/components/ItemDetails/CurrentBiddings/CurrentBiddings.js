import './currentbiddngs.css';
import React from 'react'
import CuurentData from './CurrentBidding.json'
import CurrentBidddingCard from './CurrentBiddingCard.js/CurrentBidddingCard';
const CurrentBiddings = () => {
  return (
    <div className='currentbiddings'>
      <div className="currentbiddings-header">
        <h1>Current Biddings Prices ( ETH )</h1>
        <select>
          <option value="">latest</option>
          <option value="">oldest</option>
          <option value="">Lowest</option>
          <option value="">Hghest</option>
        </select>
      </div>
      <div className="currentbiddings-content">
        {
          CuurentData.map((curdata)=>{
            return(
              <CurrentBidddingCard curdata={curdata}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default CurrentBiddings