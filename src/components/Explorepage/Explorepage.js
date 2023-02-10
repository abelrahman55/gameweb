import './Explor.css';
import React from 'react'
import Dif from './explore-dif/Dif';
import ExploreImages from './ExploreImage/ExploreImages';
import Discove from './Discover/Discove';
import Seller from './Seller/Seller';
import Footer from '../Allindexs/Footer/Footer'
const Explorepage = () => {
  return (
    <>
      <div className='explore'>
        <Dif/>
        <ExploreImages/>
        <Discove/>
        <Seller/>
      </div>
      <Footer/>
    </>

  )
}

export default Explorepage;