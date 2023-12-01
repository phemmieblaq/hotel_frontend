import React from 'react'
import tick from '../../assets/svg/tick.svg'
import Button from '../../components/button'
import './style.css';

const Confirmation = () => {
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
        Your hotel booking for Pearl room and Thermo room as been confirmed from 6th to 8th of Oct 2023. You can view hotels bookings and make others for food and drinks you want on arrival.
        </p>
        <div className="splitButton">
            <div>
        <Button
        title='View booking details'
        /></div>
        <div>
         <Button
        title='View more rooms'
        secondary
        />
        </div>

</div>
      </div>
    </div>
  )
}

export default Confirmation
