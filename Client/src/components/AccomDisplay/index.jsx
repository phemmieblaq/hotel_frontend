import React from 'react'
import Button from '../../components/button'
import MiniDescription from '../../components/miniDescription'
import wifi from '../../assets/svg/wifi.svg'
import minibar from '../../assets/svg/wifi.svg'
import balcony from '../../assets/svg/wifi.svg'
import bath from '../../assets/svg/wifi.svg'
import coffee from '../../assets/svg/wifi.svg'
import house from '../../assets/svg/wifi.svg'
import people from '../../assets/svg/wifi.svg'
import bed from '../../assets/svg/wifi.svg'

import './style.css'

const highlights = [
  {
    img: {minibar},
    name: "Minibar with free breakfast",
  },
  {
    img: {balcony},
    name: "Private balcony",
  },
  {
    img: {bath},
    name: "Luxury bath amenities",
  },
  {
    img: {coffee},
    name: "\"Green coffee\" Machine",
  },
]
const room = [
  {
    img: {house},
    name: "20 sqm / 215 sqft",
  },
  {
    img: {people},
    name: "2 adults",
  },
  {
    img: {bed},
    name: "Queen bed",
  },
  {
    img: {bed},
    name: ["Queen bed", 'twin bed']
  },
];

function AccomDisplay({ image }) {
  return (
    <div className='bigDiv'>
      <img src={image} alt="hotel room" className='displayImage' />
      <div className='displayInfo'>
        {/* Title */}
        <h2 className='AdTitle'>Title</h2>

        {/* 'p' for info about the room */}
        <p className='Adparagraph'>vfeodbvfjodanvnvfd fovjb oabfv vojbef voefvoj efov  efve v</p>

        {/* Div for 'Highlight' and 'Room Details' */}
        <div className='amenities'>
          {/* Highlights */}
          <div className='adHighlights'>
            <h5>Highlights</h5>
            <MiniDescription image={wifi} text={'dcbihsbcd'} />
            <MiniDescription image={wifi} text={'dcbihsbcd'} />
            <MiniDescription image={wifi} text={'dcbihsbcd'} />
            <MiniDescription image={wifi} text={'dcbihsbcd'} />
            <MiniDescription image={wifi} text={'dcbihsbcd'} />
            <MiniDescription image={wifi} text={'dcbihsbcd'} />
            <MiniDescription image={wifi} text={'dcbihsbcd'} />

          </div>
          <div className='adRoomDetails'>
            <h5>Room Details</h5>
            
          </div>
        </div>
        {/* Buuton */}
        <div className='adButton'>
          <Button title={'Book Now'}/>
        </div>

      </div>

    </div>
  )
}

export default AccomDisplay
