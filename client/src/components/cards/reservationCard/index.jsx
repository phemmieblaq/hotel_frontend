import React from 'react'
import './style.css'
import Button from '../../button';

const ReservationCard = ({ checkIn, checkOut, noOfDays, refNumber, roomNo }) => {

  return (
    <div className='mainReservationWrapper'>
      <div className="reservationWrapper">
        <div className="innerContainer">
          <ReservationDetails
            details=' Booking Ref Number :'
            filledDetails={refNumber} />
            
          <ReservationDetails
            details=' Rooms:'
            filledDetails={`${roomNo} `} />

          <div className="flexwrapper">
            <ReservationDetails
              details='Duration'
              filledDetails={`${noOfDays} ${(noOfDays===0 ||noOfDays===1)?'day':'day'} `} />
          </div>

          <div className="flexwrapper">
            <ReservationDetails
              details='Check-in:'
              filledDetails={`${checkIn} 3:00PM`} />
            <ReservationDetails
              details='Check-out:'
              filledDetails={`${checkOut} 11:00AM`}  />
          </div>
        </div>

        <div className="buttonCancelContainer">
          <div className="middleWrapper">
            <div className="editWrapper">
              <Button title='Edit bookings' secondary />
            </div>
            <p className="cancel"> Cancel bookings </p>
          </div>
        </div>

      </div>
    </div>
  )
}
const ReservationDetails = ({ details, filledDetails }) => {

  return (
    <div className="contentDetails">
      <p className="detailsBlock">{details}</p>
      <p className="filledDetailsBlock">{filledDetails}</p>
    </div>

  );
};

export default ReservationCard
