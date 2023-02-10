import './createnft.css';
import React from 'react'
import Crnft from './Createdata.json'
const CreateNft = () => {
  return (
    <div className='createnft'>
      <div className='createnft-container'>
      <button>create Your NFT Now</button>
        <div className='head'>
          <h2>Create Your NFT & Put It On The Market.</h2>
        </div>
        <div className='createnft-content'>
          {
            Crnft.map((nft)=>{
              return(
                <div className='col' key={nft.id}>
                  <div className='nft'>
                    <img src={nft.image} alt="" />
                    <h3>{nft.title}</h3>
                    <p>{nft.des}</p>
                  </div>
                  <div className='num'>
                    <h5>{nft.id}</h5>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default CreateNft