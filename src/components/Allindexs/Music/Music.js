import React,{useState} from 'react'
import MuiscCard from './MusicCard/MuiscCard';
import {AllData} from './Musicdata'
import './Music.css'
const Music = () => {
  const [prod, setprod] = useState("");
  return (
    <div className='music'>
      <div className="music-container">
        <div className="btns">
          <button
          onClick={()=>{
            setprod("")
          }}
          >All items</button>
          <button
          onClick={()=>{
            setprod("music")
          }}
          >Music Art</button>
          <button
            onClick={()=>{
              setprod("digital")
            }}
          >Digital Art</button>
          <button
            onClick={()=>{
              setprod("block")
            }}          
          > Block Art</button>
          <button
            onClick={()=>{
              setprod("blockchain")
            }} 
          >Blockchain</button>
          <button
            onClick={()=>{
              setprod("virtual")
            }} 
          >Virtual</button>
        </div>
        <h1 style={{color:'white'}}>items currently in the market</h1>
        <div className="music-row text-light">
          {
            AllData.filter((val)=>{
              if(prod===""){
                return val;
              }
              else if(prod==="music"){
                return val.music_name==="Music Art Super Item";
              }
              else if(prod==="digital"){
                return val.music_name==="Digital Crypto Artwork";
              }
              else if(prod==="block"){
                return val.music_name==="Blockchain Music Design";
              }
              else if(prod==="blockchain"){
                return val.music_name==="Blockchain Item One";
              }              
              else if(prod==="virtual"){
                return val.music_name==="Virtual Currency Art";
              }
            }).map((va,key)=>{
              return(
                <MuiscCard music={va}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Music