import './autherpage.css';
import React from 'react'
import { Container } from 'react-bootstrap';
import ItemDif from '../ItemDetails/ItemDif/ItemDif'
import MelanieSmith from './MelaniaSmith/MelanieSmith';
import CreateNft from '../Allindexs/CreateNFT/CreateNft';
import Footer from '../Allindexs/Footer/Footer'
import LikeDiscover from './LikeDiscover/LikeDiscover';
const AutherPage = () => {
  const pagename="Auther";
  return (
    <div className='autherpage'>
        <ItemDif pagename={pagename}/>
        <MelanieSmith/>
        <CreateNft/>
        <LikeDiscover/>
        <Footer/>
    </div>
  )
}

export default AutherPage