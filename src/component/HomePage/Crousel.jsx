import React from 'react'
import rightArrow from '../../image/rightArrow.png'
import leftArrow from '../../image/leftArrow.png'
import offer1 from '../../image/offer1.png'
import offer2 from '../../image/offer2.png'
import offer3 from '../../image/offer3.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation,Autoplay]);




const Crousel = () => {

    
  // console.log(swiperDiv);
  // Now you can use all slider methods like
const next = () =>{
  const swiperDiv = document.querySelector('.swiper');
  swiperDiv.swiper.slideNext();
}
const prev = () =>{
  const swiperDiv = document.querySelector('.swiper');
  swiperDiv.swiper.slidePrev();
}


  return (
    <div className='crousel' >
        <div className="container">
        <div className="carousel">
            <img src={leftArrow} className="arrow" alt=""  onClick={()=>prev()} />
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            // onSlideChange={() => console.log('slide change')}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            >
            <SwiperSlide><img src={offer1} alt="" className="sliderimg"/></SwiperSlide>
            <SwiperSlide><img src={offer2} alt="" className="sliderimg"/></SwiperSlide>
            <SwiperSlide><img src={offer3} alt="" className="sliderimg"/></SwiperSlide>
            </Swiper>
            
            <img src={rightArrow}  className="arrow" alt=""  onClick={()=>next()} />
            </div>
        </div>
    </div>
  )
}

export default Crousel