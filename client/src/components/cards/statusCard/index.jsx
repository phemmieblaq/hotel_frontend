import React from 'react'
import './style.css'
import DropDownInput from '../../input/dropDownInput'

const StatusCard = () => {
    const options=['className', 'class']
  return (

      <div className="mainCardWrappers">
    <h1>
    Room 13/ Junior suite
    </h1>
    <h2>Checked out</h2>
    <div>
    <DropDownInput
                Options={options}
               
                
                
              
             
                initialValue='Receptionist'
                // setValue={handleGuestChange}
               
                
               
              />
              </div>
      </div>
    
  )
}

export default StatusCard
