import React, { useEffect, useState } from 'react'
import ReservationCard from '../../components/cards/reservationCard'
import './style.css'
import axios from 'axios';
const Reservation = () => {
  const [userData, setUserData] = useState(null);


  useEffect(() => {
    // Retrieve data from localStorage

    const storedData = localStorage.getItem("userInfo");
   

    // Parse the stored data if it exists
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUserData(parsedData);
    }
    
  }, []);
  const cNo =userData?.data.cNo
  const apiUrl = 'http://localhost:3001/reservations'



  useEffect(() => {
    const getReservation = async () => {
      if(cNo){
      const postData = {
        "cNo": cNo
      }
      console.log('cNo:', typeof(cNo));
      console.log('apiUrl:', apiUrl);
      console.log('postData:', postData);
  
      //Make a POST request using Axios
      
      try {
        const response = await axios.post(apiUrl, postData);
        console.log('Response:', response);
      }
      catch (error) {
        // Handle the error
      
      
      }
    
    }}
  
    getReservation();
  }, [cNo, apiUrl]);
  
  return (
    <div>
      <p className="main-heading">
      Reservation details
      </p>
      <p className="sub_heading">
      Your reservations
      </p>
      <ReservationCard 
      />
      <p className="main-heading">
      What will you like to be served when you arrive?
      </p>

    </div>
  )
}

export default Reservation
