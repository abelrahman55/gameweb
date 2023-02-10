/* import React, { useRef, useState } from "react";
 */// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { swipperimage } from "../../../imagesdep";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swipper.css";

// import required modules
import { Pagination, Navigation } from "swiper";

 const Swipper=()=> {
  return (
    <>
      <Swiper
      breakpoints={
        {
          0:{
            slidesPerView:1,
            spaceBetween:10
          },
          480:{
            slidesPerView:1,
            spaceBetween:10
          },
          768:{
            slidesPerView:1,
            spaceBetween:15
          },
          1024:{
            slidesPerView:3,
            spaceBetween:15
          },
          1280:{
            slidesPerView:3,
            spaceBetween:25
          }
        }
      }
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="swipper-container">
        <SwiperSlide className='swipper-item'>
      <img src={swipperimage} alt="" />
      <div className='swipper-information'>
        <h1>Bored Ape kannel club</h1>
        <div className='swipper-info'>
          <p>items in</p>
          <div className='inf'>
            <h3>
              <span>collection</span>
              <span>category</span>
            </h3>
            <h3>
              <span>324/324</span>
              <span>crypto</span>
            </h3>
          </div>
        </div>
      </div>
      <button>Explore Bored Ape</button>
    </SwiperSlide>
    <SwiperSlide className='swipper-item'>
      <img src={swipperimage} alt="" />
      <div className='swipper-information'>
        <h1>Bored Ape kannel club</h1>
        <div className='swipper-info'>
          <p>items in</p>
          <div className='inf'>
            <h3>
              <span>collection</span>
              <span>category</span>
            </h3>
            <h3>
              <span>324/324</span>
              <span>crypto</span>
            </h3>
          </div>
        </div>
      </div>
      <button>Explore Bored Ape</button>
    </SwiperSlide>
    <SwiperSlide className='swipper-item'>
      <img src={swipperimage} alt="" />
      <div className='swipper-information'>
        <h1>Bored Ape kannel club</h1>
        <div className='swipper-info'>
          <p>items in</p>
          <div className='inf'>
            <h3>
              <span>collection</span>
              <span>category</span>
            </h3>
            <h3>
              <span>324/324</span>
              <span>crypto</span>
            </h3>
          </div>
        </div>
      </div>
      <button>Explore Bored Ape</button>
    </SwiperSlide>
    <SwiperSlide className='swipper-item'>
      <img src={swipperimage} alt="" />
      <div className='swipper-information'>
        <h1>Bored Ape kannel club</h1>
        <div className='swipper-info'>
          <p>items in</p>
          <div className='inf'>
            <h3>
              <span>collection</span>
              <span>category</span>
            </h3>
            <h3>
              <span>324/324</span>
              <span>crypto</span>
            </h3>
          </div>
        </div>
      </div>
      <button>Explore Bored Ape</button>
    </SwiperSlide>
    <SwiperSlide className='swipper-item'>
      <img src={swipperimage} alt="" />
      <div className='swipper-information'>
        <h1>Bored Ape kannel club</h1>
        <div className='swipper-info'>
          <p>items in</p>
          <div className='inf'>
            <h3>
              <span>collection</span>
              <span>category</span>
            </h3>
            <h3>
              <span>324/324</span>
              <span>crypto</span>
            </h3>
          </div>
        </div>
      </div>
      <button>Explore Bored Ape</button>
    </SwiperSlide>
    <SwiperSlide className='swipper-item'>
      <img src={swipperimage} alt="" />
      <div className='swipper-information'>
        <h1>Bored Ape kannel club</h1>
        <div className='swipper-info'>
          <p>items in</p>
          <div className='inf'>
            <h3>
              <span>collection</span>
              <span>category</span>
            </h3>
            <h3>
              <span>324/324</span>
              <span>crypto</span>
            </h3>
          </div>
        </div>
      </div>
      <button>Explore Bored Ape</button>
    </SwiperSlide>
    <SwiperSlide className='swipper-item'>
      <img src={swipperimage} alt="" />
      <div className='swipper-information'>
        <h1>Bored Ape kannel club</h1>
        <div className='swipper-info'>
          <p>items in</p>
          <div className='inf'>
            <h3>
              <span>collection</span>
              <span>category</span>
            </h3>
            <h3>
              <span>324/324</span>
              <span>crypto</span>
            </h3>
          </div>
        </div>
      </div>
      <button>Explore Bored Ape</button>
    </SwiperSlide>
    <SwiperSlide className='swipper-item'>
      <img src={swipperimage} alt="" />
      <div className='swipper-information'>
        <h1>Bored Ape kannel club</h1>
        <div className='swipper-info'>
          <p>items in</p>
          <div className='inf'>
            <h3>
              <span>collection</span>
              <span>category</span>
            </h3>
            <h3>
              <span>324/324</span>
              <span>crypto</span>
            </h3>
          </div>
        </div>
      </div>
      <button>Explore Bored Ape</button>
    </SwiperSlide>
    <SwiperSlide className='swipper-item'>
      <img src={swipperimage} alt="" />
      <div className='swipper-information'>
        <h1>Bored Ape kannel club</h1>
        <div className='swipper-info'>
          <p>items in</p>
          <div className='inf'>
            <h3>
              <span>collection</span>
              <span>category</span>
            </h3>
            <h3>
              <span>324/324</span>
              <span>crypto</span>
            </h3>
          </div>
        </div>
      </div>
      <button>Explore Bored Ape</button>
    </SwiperSlide>
        </div>

      </Swiper>
    </>
  );
}
export default Swipper;



/* import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import { swipperimage } from '../../../imagesdep';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Swipper =() => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={
        {
          0:{
            slidesPerView:1,
            spaceBetween:10
          },
          480:{
            slidesPerView:2,
            spaceBetween:10
          },
          768:{
            slidesPerView:3,
            spaceBetween:15
          },
          1024:{
            slidesPerView:4,
            spaceBetween:15
          },
          1280:{
            slidesPerView:5,
            spaceBetween:25
          }
        }
      }
      grabCursor={true}
    >
          <SwiperSlide className='swipper-item'>
      <img src={swipperimage} alt="" />
      <div className='swipper-information'>
        <h1>Bored Ape kannel club</h1>
        <div className='swipper-info'>
          <p>items in</p>
          <div className='inf'>
            <h3>
              <span>collection</span>
              <span>category</span>
            </h3>
            <h3>
              <span>324/324</span>
              <span>crypto</span>
            </h3>
          </div>
        </div>
      </div>
      <button>Explore Bored Ape</button>
          </SwiperSlide>


<SwiperSlide className='swipper-item'>
      <img src={swipperimage} alt="" />
      <div className='swipper-information'>
        <h1>Bored Ape kannel club</h1>
        <div className='swipper-info'>
          <p>items in</p>
          <div className='inf'>
            <h3>
              <span>collection</span>
              <span>category</span>
            </h3>
            <h3>
              <span>324/324</span>
              <span>crypto</span>
            </h3>
          </div>
        </div>
      </div>
      <button>Explore Bored Ape</button>
          </SwiperSlide>


<SwiperSlide className='swipper-item'>
      <img src={swipperimage} alt="" />
      <div className='swipper-information'>
        <h1>Bored Ape kannel club</h1>
        <div className='swipper-info'>
          <p>items in</p>
          <div className='inf'>
            <h3>
              <span>collection</span>
              <span>category</span>
            </h3>
            <h3>
              <span>324/324</span>
              <span>crypto</span>
            </h3>
          </div>
        </div>
      </div>
      <button>Explore Bored Ape</button>
          </SwiperSlide>


<SwiperSlide className='swipper-item'>
      <img src={swipperimage} alt="" />
      <div className='swipper-information'>
        <h1>Bored Ape kannel club</h1>
        <div className='swipper-info'>
          <p>items in</p>
          <div className='inf'>
            <h3>
              <span>collection</span>
              <span>category</span>
            </h3>
            <h3>
              <span>324/324</span>
              <span>crypto</span>
            </h3>
          </div>
        </div>
      </div>
      <button>Explore Bored Ape</button>
          </SwiperSlide>
          <SwiperSlide className='swipper-item'>
      <img src={swipperimage} alt="" />
      <div className='swipper-information'>
        <h1>Bored Ape kannel club</h1>
        <div className='swipper-info'>
          <p>items in</p>
          <div className='inf'>
            <h3>
              <span>collection</span>
              <span>category</span>
            </h3>
            <h3>
              <span>324/324</span>
              <span>crypto</span>
            </h3>
          </div>
        </div>
      </div>
      <button>Explore Bored Ape</button>
          </SwiperSlide>
    </Swiper>
  );
};
export default Swipper; */


/* 
    <SwiperSlide className='swipper-item'>
      <img src={swipperimage} alt="" />
      <div className='swipper-information'>
        <h1>Bored Ape kannel club</h1>
        <div className='swipper-info'>
          <p>items in</p>
          <div className='inf'>
            <h3>
              <span>collection</span>
              <span>category</span>
            </h3>
            <h3>
              <span>324/324</span>
              <span>crypto</span>
            </h3>
          </div>
        </div>
      </div>
      <button>Explore Bored Ape</button>
    </SwiperSlide>
*/