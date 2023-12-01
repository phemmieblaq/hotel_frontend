import React from 'react'
import ReservationCard from '../../components/cards/reservationCard'
import './style.css'
const Reservation = () => {
  return (
    <div>
      <p className="main-heading">
      Reservation details
      </p>
      <p className="sub_heading">
      Your reservations
      </p>
      <ReservationCard />
      <p className="main-heading">
      What will you like to be served when you arrive?
      </p>

    </div>
  )
}

export default Reservation
