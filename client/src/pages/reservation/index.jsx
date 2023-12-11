import React, { useEffect, useState } from 'react'
import ReservationCard from '../../components/cards/reservationCard'
import './style.css'
import axios from 'axios';
import { formatDate } from '../../globalFunction';
import ActiveNavLink from '../../components/activeNavlink';
import MealCard from '../../components/cards/mealCard';
const Reservation = () => {
  const [userData, setUserData] = useState(null);
  const [reservationData, setReservationData] = useState([]);


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
      
      console.log(postData)
      //Make a POST request using Axios
      
      try {
        const response = await axios.post(apiUrl, postData);
        console.log('Response:', response);
        setReservationData(response)
        console.log(reservationData?.data?.reservation);
      }
      catch (error) {
        // Handle the error
      
      
      }
    
    }}
  
    getReservation();
  }, [cNo, apiUrl]);
  // console.log(reservationData?.data?.reservation)
  let reservations =reservationData?.data?.reservation?.data
  return (
    <div>
      <p className="main-heading">
      Reservation details
      </p>
      <p className="sub_heading">
      Your reservations
      </p>
      {reservations?.map((el, index) => (
        <ReservationCard
      checkIn={formatDate(el.checkin)}
       checkOut={formatDate(el.checkout)}
        noOfDays={el.days_reserved}
        refNumber={el.days_reserved}
        roomNo ={el.r_no}
      />
      ))} 
      
      <p className="main-heading">
      What will you like to be served when you arrive?
      </p>
      <div className="fullLength">
<div className="meal_LinkWrapper">
  <div className="firstNav">
<ActiveNavLink
                path='/reservations'
                text='foods'/>
                </div>
              <div className="secondNav">
        <ActiveNavLink
                path='/reservations/drinks'
                text='Drinks'/>
                </div>
           
</div>

</div>
<div className="mealCards">
  <MealCard/>
</div>
    </div>
  )
}

export default Reservation
