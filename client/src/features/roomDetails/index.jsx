import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import './style.css';



import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import ReservationCard from '../../components/cards/reservationCard';
import { hotelImages } from './constant';



const RoomDetails = () => {
    
  
    const lImages=[ 
        "/static/media/suite.4755e5fb27da9a6ce0e4.jpeg",
        
        "/static/media/hall.17e9fd09d30fa9613ea6.jpeg",

        "/static/media/standardDouble1.e2ce4aa8cd4e88c2bed5.jpeg",
  "/static/media/standardDouble.4755e5fb27da9a6ce0e4.jpeg"

        ]
  return (
    <div>
      <div className="details-wrapper">
          <div className="details-image-wrapper">
          <Swiper
  
  slidesPerView={1}
  pagination={{ clickable: true }}
  navigation
>
  {hotelImages.map((imageSrc, index) => (
    <SwiperSlide key={index}>
      <div className='swipe-image-container'>
      <img src={imageSrc} alt={`Slide ${index}`} />
      </div>
    </SwiperSlide>
  ))}
</Swiper>
          </div>
         
          <div className="hall-content">



          </div>

    </div>
    </div>
  )
}

export default RoomDetails
