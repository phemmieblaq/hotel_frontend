import React from 'react'
import './style.css'
import DropDownInput from '../../input/dropDownInput'

const StatusCard = ({roomNum, roomType, date}) => {
  const options = ['Check In']
  return (

    <div className="mainCardWrappers">
      <h1> Room {roomNum}/ {roomType}</h1>
      <h2>Date:{date}</h2>
      <div>
        <DropDownInput
          Options={options} initialValue='Receptionist' 
          // setValue={handleGuestChange} 
          />
      </div>
    </div>

  )
}

export default StatusCard
