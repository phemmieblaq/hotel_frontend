import React, { useEffect, useState } from 'react'
import tick from '../../assets/svg/tick.svg'
import Button from '../../components/button'
import './style.css';
import AnalyticCard from '../../components/cards/analyticCard';
import { useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const [bookingData, setBookingData] = useState(null);
  let navigate= useNavigate();

  const RealBackendRoomtype= {
    'Standard Double': 'std_d',
    'Standard Twin': 'std_t',
    'Superior Double': 'sup_d',
    'Superior Twin': 'sup_t',
  }
  

  useEffect(() => {
    // Retrieve data from localStorage
    const storedData = localStorage.getItem("bookingInfo");

    // Parse the stored data if it exists
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setBookingData(parsedData.data);
    }
  }, []);

  const correspondingKey = Object.keys(RealBackendRoomtype).find((key) => RealBackendRoomtype[key] === bookingData?.class);
  console.log(bookingData)
  return (
    <div className='mainBookingWrapper'>
      <div className="bookWrapper">
        <div className="tickWrapper">
            <img src={tick} alt="tick" />
        </div>
        <p className="mainHeading">
        Booking confirmed
        </p>
        <p className="bookingContent">
        Your hotel booking {correspondingKey} has been confirmed from {bookingData?.check_in} to  {bookingData?.check_out}. You can view hotels bookings and make orders for food and drinks you want on arrival.
        </p>
        <div className="splitButton">
            <div>
        <Button
        title='View booking details'
        onClick={()=>navigate('/reservations')}
        /></div>
        <div>
         <Button
        title='View more rooms'
        onClick={()=>navigate('/accomodation')}
        secondary
        />
         
        </div>

</div>
      </div>
    </div>
  )
}

export default Confirmation
