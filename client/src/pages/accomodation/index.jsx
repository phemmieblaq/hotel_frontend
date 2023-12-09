import React, { useState } from 'react'
import OtherBg from '../../containers/otherBg'
import LinkHeading from '../../containers/subheading'
import { accomodation } from './constant'
import HotelCard from '../../components/cards/hotelCard'
import standardDouble from '../../assets/png/standardDouble.png'
import standardTwin from '../../assets/png/standardTwin.png'
import superiorTwin from '../../assets/png/superiorTwin.png'
import superiorDouble from '../../assets/png/superiorDouble.jpeg'
import './style.css';

import { useNavigate } from 'react-router-dom'
import  axios from 'axios';
import { useEffect } from 'react'



const Accomodation = () => {
  const[accommodations,setAccommodations]= useState([])

  const fetchAccomodationFromBackend = async () => {
    try {
      const response = await axios.get('http://localhost:3001/accommodation'); // Adjust the API endpoint accordingly
      console.log('Data from backend:', response.data);
      setAccommodations(response.data)
    } catch (error) {
      console.error('Error fetching data from backend:', error);
    }
  };
  useEffect(() => {
    fetchAccomodationFromBackend ()
    
  }, []);
  

 
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
        {accommodations?.map((el,index)=>(
          <div className='singleCardWrapper' key={index}>
             < HotelCard
             title={el?.r_class==='std_t'? 'Standard Twin': el?.r_class==='std_d'? 'Standard Double': el?.r_class==='sup_t'? 'Superior Twin': el?.r_class==='sup_d'? 'Superior Double': ''} 
             size={el?.dimention}
             noOfPeople={el?.no_people}
             price={el?.price}
             description1={el?.description1}
             description2={el?.description2}
             img={el?.r_class==='std_t'? standardTwin : el?.r_class==='std_d'? standardDouble: el?.r_class==='sup_t'? superiorTwin: el?.r_class==='sup_d'? superiorDouble: ''}
             accomodation 
             onClick={() => handleRoomClick(el?.r_class)}/>
          </div>
        
        ))}
      </div>
      
    </div>
  )
}

export default Accomodation
