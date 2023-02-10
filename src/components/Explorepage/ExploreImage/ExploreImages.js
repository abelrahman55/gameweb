import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import autherimage from '../../../images/author.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swiper.css'
import Discoverdata from './discoverimage.json';
/* import './expolreimage.css'*/ const ExploreImage = () => {
  return (
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
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <div className="row">
        {
          Discoverdata.map((discover)=>{
            return(
              <SwiperSlide className='swipper-item' key={discover.image}>
{/*               <img src={discover.image} alt="" />
 */}            <div className="explore-info">
                  <h1 className="title"style={{color:'white'}}>{discover.title}</h1>
                  <div className="discover-info">
                    <div className="image">
                      <img src={autherimage} alt="" />
                    </div>
                    <div className="info">
                      <h4>{discover.name}</h4>
                      <p>@libertryart</p>
                    </div>
                  </div>
                </div>
            </SwiperSlide>
            )
          })
        }
      </div>
    </Swiper>
  );
};
export default ExploreImage;
  /* 
  
                  <SwiperSlide className='swipper-item' key={discover.image}>
                  <img src={discover.image} alt="" />
                <div className="explore-info">
                  <h1 className="title"style={{color:'white'}}>{discover.title}</h1>
                  <div className="discover-info">
                    <div className="image">
                      <img src={autherimage} alt="" />
                    </div>
                    <div className="info">
                      <h4>{discover.name}</h4>
                      <p>@libertryart</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
  */