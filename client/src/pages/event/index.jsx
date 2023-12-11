import React, { useEffect, useState } from 'react'
import LinkHeading from '../../containers/subheading'
import OtherBg from '../../containers/otherBg'
import Hall from '../../features/hall'
import './style.css';
import hall from '../../assets/png/hall.jpeg';
import hallIlluminate from '../../assets/png/hallIlluminate.jpeg';
import hallElegance from '../../assets/png/hallElegance.jpeg';
import hallpanorama from '../../assets/png/hallpanorama.jpeg';





import axios from 'axios';

const EventRooms = () => {
  const[events,setEvents]= useState([])

  const fetchEventsFromBackend = async () => {
    try {
      const response = await axios.get('http://localhost:3001/events'); // Adjust the API endpoint accordingly
      console.log('Data from backend:', response.data);
      setEvents(response.data.data)
    } catch (error) {
      console.error('Error fetching data from backend:', error);
    }
  };
  useEffect(() => {
    fetchEventsFromBackend ()
    
  }, []);
  
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
      {events?.map((el,index)=>(
        <Hall
        key={index}
        hallHeading={el?.r_name}
        dimension={el?.dimention}
        rangeOfPeople={el?.capasity}
        theater={el?.theater}
        classRoom={el?.class_room}
        shape={el?.u_shape}
        description={el?.description}
        img={el?.r_name==='Hall Revolve'? hall: el?.r_name==='Hall Illuminate'? hallIlluminate: el?.r_name==='Hall Elegance' ? hallElegance: el?.r_name==='Hall Panorama'? hallpanorama: ''}
    
        
        />
      ))}
      
      
      </div>
    </div>
  )
}

export default EventRooms
