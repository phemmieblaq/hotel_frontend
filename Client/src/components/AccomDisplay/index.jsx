import React from 'react'
import Button from '../../components/button'
import MiniDescription from '../../components/miniDescription'


import './style.css'

function AccomDisplay({obj}) {
  return (
    <div className='bigDiv'>
      <img src={obj.display.highlights[0].img} alt="hotel room" className='displayImage' />
      <div className='displayInfo'>
        {/* Title */}
        <h2 className='AdTitle'>{obj.display.title}</h2>

        {/* 'p' for info about the room */}
        <p className='Adparagraph'>{obj.display.text}</p>

        {/* Div for 'Highlight' and 'Room Details' */}
        <div className='amenities'>
          {/* Highlights */}
          <div className='adHighlights'>
            <h5>Highlights</h5>
            {obj.display.highlights?.map((innerObj, index)=>(
              <MiniDescription key={index} image={innerObj.img} text={innerObj.name}/>
            ))}
          </div>
          <div className='adRoomDetails'>
            <h5>Room Details</h5>
            {obj.display.room?.map((innerObj, index)=>(
              <MiniDescription key={index} image={innerObj.img} text={innerObj.name}/>
            ))}
          </div>
        </div>
        {/* Buuton */}
        <div className='adButton'>
          <Button id='adButton' title={'Book Now'}/>
        </div>

      </div>

    </div>
  )
}

export default AccomDisplay
