import './itemdetails.css';

import React from 'react'
import ItemDif from './ItemDif/ItemDif';
import ViewDetails from './ViewDetails/ViewDetails';
import CreateNft from '../Allindexs/CreateNFT/CreateNft'
import Footer from '../Allindexs/Footer/Footer'
import CurrentBiddings from './CurrentBiddings/CurrentBiddings';
const ItemDetails = () => {
  return (
    <div className='itemdetails'>
      <ItemDif/>
      <ViewDetails/>
      <CurrentBiddings/>
      <CreateNft/>
      <Footer/>
    </div>
  )
}

export default ItemDetails