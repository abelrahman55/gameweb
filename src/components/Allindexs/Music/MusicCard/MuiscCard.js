import './musiccard.css';
import React from 'react'
import image from '../../../../images//market-01.jpg'
import imageper from '../../../../images/author.jpg'
const MuiscCard = ({music}) => {
  return (
    <div className='muisccard'>
      <div className="musiccard-image">
        <img src={image} alt="" />
      </div>
      <div className="musiccard-information">
        <div className="top-information">
          <h1>{music.music_name}</h1>
          <div className="per">
            <div className="per-image">
              <img src={imageper} alt="" />
            </div>
            <div className="per-info">
              <h4>{music.per_name}</h4>
              <p>@libertyart</p>
            </div>
          </div>
        </div>
        <div className="num-info">
          <div className="current">
            <h5>Current Bid</h5>
            <h6>{music.current_bid}</h6>
            <h6>({music.money})</h6>
          </div>
          <div className="end">
            <h5>Ends In</h5>
            <h6>{music.end}</h6>
            <h6>{music.date}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MuiscCard