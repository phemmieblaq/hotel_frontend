import React, { useEffect, useState } from 'react'
import ReservationCard from '../../components/cards/reservationCard'
import './style.css'
import axios from 'axios';
import { formatDate } from '../../globalFunction';
import ActiveNavLink from '../../components/activeNavlink';
import { Outlet } from 'react-router';





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

  const cNo = userData?.data.cNo
  const apiUrl = 'http://localhost:3001/reservations'

  useEffect(() => {
    const getReservation = async () => {
      if (cNo) {
        const postData = {
          "cNo": cNo
        }
  
        //Make a POST request using Axios
        try {
          const response = await axios.post(apiUrl, postData);
          setReservationData(response)
        }
        catch (error) {
          // Handle the error
        }
      }
    }
    getReservation();
  }, [cNo]);

  let reservations = reservationData?.data?.reservation?.data
  console.log(reservations?.length)
  return (
    <div>
      <p className="main-heading">Reservation details</p>

      <p className="sub_heading">Your reservations</p>
      {(reservations?.length ===undefined || reservations?.length===0) &&

      <p className="main-heading">No reservation added yet</p>}

      {reservations?.map((el, index) => (
        <ReservationCard
          key={index}
          checkIn={formatDate(el.checkin)}
          checkOut={formatDate(el.checkout)}
          noOfDays={el.days_reserved}
          refNumber={el.days_reserved}
          roomNo={el.r_no}
        />
      ))}

      <p className="main-heading">What will you like to be served when you arrive?</p>

      <div className="fullLength">
        <div className="meal_LinkWrapper">
          <div className="firstNav"><ActiveNavLink path='/reservations' text='foods' /></div>
          <div className="secondNav"><ActiveNavLink path='/reservations/drinks' text='Drinks' /></div>
        </div>
      </div>

      <div>
        <Outlet/>
      </div>

    </div>
  )
}

export default Reservation