import React from 'react'
/* import { Navbar } from 'react-bootstrap'
 */
import './Home.css'
import {homeimg}from '../../imagesdep'
const Home = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <div className='home-text'>
          <h3>Liberty NFT Market</h3>
          <h2>Create, Sell & Collect Top NFT’s.</h2>
          <p>Liberty NFT Market is a really cool and professional design for your NFT websites. This HTML CSS template is based on Bootstrap v5 and it is designed for NFT related web portals. Liberty can be freely downloaded from TemplateMo's free css templates.</p>
          <div className='btns'>
            <button>Explore Top NFTs</button>
            <button>Watch Our Videos</button>
          </div>
        </div>
        <div className='home-image'>
          <img src={homeimg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home