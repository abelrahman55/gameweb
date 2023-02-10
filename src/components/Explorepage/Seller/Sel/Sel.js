import './sel.css';
import React from 'react'
import sell1 from '../../../../images/author.jpg';
import sell2 from '../../../../images/author-02.jpg';
const Sel = ({selcard}) => {
  return (
    <div className='sel'>
      <p className='sel-id'>
        {selcard.id}
      </p>
      <div className="sel-info">
        <div className="sel-info-image">
          <img src={(selcard.id %2===0)?sell1:sell2} alt="" />
        </div>
        <div className="sel-info-inf">
          <h3>{selcard.name}</h3>
          <p>{selcard.money}</p>
        </div>
      </div>
    </div>
  )
}

export default Sel