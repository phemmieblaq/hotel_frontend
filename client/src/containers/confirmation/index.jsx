import React, { useEffect, useState } from 'react'
import tick from '../../assets/svg/tick.svg'
import Button from '../../components/button'
import './style.css';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router';
import ActiveNavLink from '../../components/activeNavlink';

const Confirmation = () => {
  const [bookingData, setBookingData] = useState(null);
  let navigate = useNavigate();

  const RealBackendRoomtype = {
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
  console.log(bookingData.booking_ref)
  return (
    <div className='mainBookingWrapper'>
      <div className="bookWrapper">
        <div className="tickWrapper">
          <img src={tick} alt="tick" />
        </div>
        <p className="mainHeading"> Booking confirmed</p>
        <p className="bookingContent">
          Your hotel booking {correspondingKey} has been confirmed from {bookingData?.check_in} to  {bookingData?.check_out}. You can view hotels bookings and make orders for food and drinks you want on arrival.
        </p>
        <div className="splitButton">
          <div>
            <Button title='View booking details' onClick={() => navigate('/reservations')} />
          </div>
          <div>
            <Button title='View more rooms' onClick={() => navigate('/accomodation')} secondary />
          </div>
        </div>
      </div>
                    {/*  ADD TO BOOKING -  FOOD & DRINKS*/}
      <div>
        <p className="main-heading">What will you like to be served when you arrive?</p>

        <div className="fullLength">
          <div className="meal_LinkWrapper">
            <div className="firstNav"><ActiveNavLink path='/booking-confirmation' text='foods' /></div>
            <div className="secondNav"><ActiveNavLink path='/booking-confirmation/drinks' text='Drinks' /></div>
          </div>
        </div>

        <div>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Confirmation
