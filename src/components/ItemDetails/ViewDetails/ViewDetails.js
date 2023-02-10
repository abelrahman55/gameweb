import './viewdetials.css';
import React from 'react'
import ironmanimage from '../../../images/item-details-01.jpg';
import perimage from '../../../images/author-02.jpg'
const ViewDetails = () => {
  return (
    <div className='viewdetails'>
      <div className="viewdetails-header">
        <h1>
          View Details For <span>Item</span> Here.
        </h1>
      </div>
      <div className="viewdetails-content">
        <div className="viewdetails-content-image">
          <img src={ironmanimage} alt="" />
        </div>
        <div className="viewdetails-content-information">
          <h3>Dolores Haze Westworld Eye</h3>
          <div className="per">
            <img src={perimage} alt="" />
            <div className="per-info">
              <p>Liberty Artist</p>
              <span>@libertyart</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet,
            consectetu dipiscingei elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
          <div className="about-person">
            <div className="about-person-info">
              <h5>Current Bid</h5>
              <p>6.06 ETH</p>
              <p>($8,025.50)</p>
            </div>
            <div className="about-person-info">
              <h5>owner</h5>
              <p>abdo ali</p>
              <p>(@abdo)</p>
            </div>
            <div className="about-person-info">
              <h5>Ends In</h5>
              <p>3D 05H 20M 58S</p>
              <p>(January 22nd, 2021)</p>
            </div>
          </div>
          <div className="place">
            <h3>place Bid</h3>
            <input type="text" placeholder='1 ETH' />
            <button>Submit now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewDetails