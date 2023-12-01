import React from 'react'
import OtherBg from '../../containers/otherBg'
import LinkHeading from '../../containers/subheading'
import { accomodation } from './constant'
import HotelCard from '../../components/cards/hotelCard'
import './style.css';

import { useNavigate } from 'react-router-dom'



const Accomodation = () => {
  let navigate = useNavigate();
  
  const handleRoomClick = (roomCode) => {
 
    console.log(roomCode)
    navigate(`/accomodation/${roomCode}`);
  };
  return (
    <div>
       <div className="topWrapper">

  
<OtherBg
title='Accomodation'/>
   </div>
      <LinkHeading
      mainHeading=' Comfort home away from home'
      content='The rooms at this luxury hotel in Nice are elegantly and thoughtfully designed, maximizing space, light . Choose a higher floor with a private terrace for a view of the whole city'/>
      <div className="mainCardWrapper">
        {accomodation?.map((el,index)=>(
          <div className='singleCardWrapper' key={index}>
             < HotelCard
             title={el?.title} 
             size={el?.size}
             noOfPeople={el?.noOfPeople}
             price={el?.price}
             accomodation 
             onClick={() => handleRoomClick(el?.roomCode)}/>
          </div>
        
        ))}
      </div>
      
    </div>
  )
}

export default Accomodation
