import './itemdif.css';
import React from 'react'

const ItemDif = ({pagename}) => {
  return (
    <div className='itemdif'>
      <div className="itemdif-content">
        <h3>Liberty NFT Market</h3>
        <h1>View Item Details</h1>
        <p>Home  {pagename}</p>
        <div className="btns">
          <button>Explore Our items</button>
          <button>Create Your NFT</button>
        </div>
      </div>
    </div>
  )
}

export default ItemDif