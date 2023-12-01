import React from 'react'
import './style.css'
import Button from '../../button';

const ReservationCard = () => {

  return (
    <div className='mainReservationWrapper'>
      <div className="reservationWrapper">
        <div className="innerContainer">
            <ReservationDetails
            details=' Rooms:'
            filledDetails='Room 24 (Pearls room) and Room 26(Suite)'/>
            <ReservationDetails
            details='Duration:'
            filledDetails='3 days'/>
            <div className="flexwrapper">
     <ReservationDetails
            details='Check-in:'
            filledDetails='Mon 6th of oct 2023'/>
     <ReservationDetails
            details='Check-out:'
            filledDetails='Mon 6th of oct 2023'/>
            </div>
     
     

        </div>
        <div className="buttonCancelContainer">
          <div className="middleWrapper">
            <div className="editWrapper">
            <Button
            title='Edit bookings'
            secondary/>
            </div>
           
            <p onClick={{}}   className="cancel">
            Cancel bookings
            </p>
          

        </div>
        </div>

      </div>
    </div>
  )
}
const ReservationDetails = ({details, filledDetails})=>{

    return(
        <div className="contentDetails">
            <p className="detailsBlock">
                {details}
            </p>
            <p className="filledDetailsBlock">
                {filledDetails}
            </p>

        </div>

    );
};

export default ReservationCard
