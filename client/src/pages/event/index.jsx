import React from 'react'
import LinkHeading from '../../containers/subheading'
import OtherBg from '../../containers/otherBg'
import Hall from '../../features/hall'
import './style.css';

const EventRooms = () => {
  return (
    <div>
       <div className="topWrapper">

  
<OtherBg
title='Events Rooms'/>
   </div>
      <LinkHeading
      mainHeading=' Luxury meetings & Event venues'
      content='Plan your event with ease with our spacious and luxury meeting rooms designed for your need, helping create an unforgettable experience '/>
      <div className="mainHallWrapper">
      <Hall/>
      <Hall/>
      <Hall/>
      </div>
    </div>
  )
}

export default EventRooms
