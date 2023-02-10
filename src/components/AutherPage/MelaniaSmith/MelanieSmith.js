import './melaniesmith.css';
import React from 'react'
import melimage from '../../../images/current-04.jpg'
const MelanieSmith = () => {
  return (
    <div className='melaniesmith'>
      <div className="melaniesmith-per-info">
        <div className="per-image">
          <img src={melimage} alt="" />
        </div>
        <div className="per-info">
          <h3>Melanie Smith </h3>
          <p>@melanie32</p>
        </div>
      </div>
      <div className='melaniesmith-numbers'>
        <div className="nums">
          <div className="nums-col">
            <i class="fa-solid fa-heart"></i>
            <p>1238</p>
            <p>Likes</p>
          </div>
          <div className="nums-col">
            <i class="fa-solid fa-hand"></i>
            <p>1238</p>
            <p>stoped</p>
          </div>
          <div className="nums-col">
            <i class="fa-solid fa-dollar-sign"></i>
            <p>1238</p>
            <p>dollar</p>
          </div>
        </div>
        <div className="followers">
          <p>559 Followers</p>
          <button>follow @melanie</button>
        </div>
      </div>
    </div>
  )
}

export default MelanieSmith