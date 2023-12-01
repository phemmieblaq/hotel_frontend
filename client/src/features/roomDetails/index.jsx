import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { deluxeImages } from './constant';
import './style.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import ReservationCard from '../../components/cards/reservationCard';


const RoomDetails = () => {
    // console.log(deluxeImages)
  
    const lImages=[ 
        "/static/media/suite.4755e5fb27da9a6ce0e4.jpeg",
        
        "/static/media/hall.17e9fd09d30fa9613ea6.jpeg"

        ]
  return (
    <div>
      <div className="details-wrapper">
          <div className="details-image-wrapper">
          <Swiper
      spaceBetween={10}
      modules={[Navigation, Pagination]}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}

    >
        {lImages?.map((image1, index) => (
        <SwiperSlide key={index}>
         <img src={image1} alt="hall" className='details-image'/>
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
