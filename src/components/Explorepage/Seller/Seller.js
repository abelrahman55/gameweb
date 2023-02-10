import './seller.css';
import React from 'react'
import {seller1,seller2,seller3,seller4} from './Sellerdata1';
import Sel from './Sel/Sel';
const Seller = () => {
  return (
    <div className='seller'>
      <div className="seller-container">
        <h1 className="seller-header">
          Our Top Sellers This Week.
        </h1>
        <div className="row">
          <div className="row1">
            {
              seller1.map((sel1)=>{
                return(
                  <Sel selcard={sel1} key={sel1.id}/>
                )
              })
            }
          </div>
          <div className="row2">
            {
              seller2.map((sel2)=>{
                return(
                  <Sel selcard={sel2} key={sel2.id}/>
                )
              })
            }
          </div>
          <div className="row3">
            {
              seller3.map((sel3)=>{
                return(
                  <Sel selcard={sel3} key={sel3.id}/>
                )
              })
            }
          </div>
          <div className="row4">
            {
              seller4.map((sel4)=>{
                return(
                  <Sel selcard={sel4} key={sel4.id}/>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Seller