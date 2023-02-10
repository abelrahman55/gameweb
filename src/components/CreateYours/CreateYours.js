import React from 'react'
import ItemDif from '../ItemDetails/ItemDif/ItemDif'
import ViewDetails from '../ItemDetails/ViewDetails/ViewDetails';
import Footer from '../Allindexs/Footer/Footer'
import Form from './Form/Form';
const CreateYours = () => {
  const pagename="create Yours";
  return (
    <div className='createyours'>
      <ItemDif pagename={pagename}/>
      <ViewDetails/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default CreateYours