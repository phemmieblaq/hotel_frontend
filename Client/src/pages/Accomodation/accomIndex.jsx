/*
  Notes:-

  Caleb: 
  1.) unsure what the text under the Direction in the map info section is meant to address
  2.) Final h3 for the text "We are beyond a palace to relax" might need to considerchanging to a h4 for standard practice  
*/

import React from 'react'
import './style.css';
import HotelCard from '../../components/cards/hotelCard';
import MapContainer from '../../containers/map';
import location from '../../assets/svg/location.svg'
import AccomBackground from '../../containers/AccomBackground'
import AccomDisplay from '../../components/AccomDisplay'
import tempImage from '../../assets/svg/wifi.svg'


const Accomodation = () => {
  return (
    // Container for the whole Home Component
    <div class="container">

      <div id="backgrounder"> <AccomBackground/> </div>

      
      <div id="displayer"> <AccomDisplay image={tempImage} /> </div>

      {/* Div for the Hotel room cards shown on the landing page */}
      <div className="card-wrapper">
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
      </div>

      {/* Simple h2 tag for "Location" */}
      <h2 className='title-wrapper'>Location</h2>

      {/* Div for the Map section on the landing page */}
      <div className="map-wrapper">
        {/* Insert actual map on the home page */}
        <MapContainer />

        {/* Div for the information on the rigth hand side of the map object*/}
        <div className="right-container">

          {/* Simple h3 tag for the title "Crown Hotel" */}
          <h3 className="heading-wrapper"> Crown Hotel</h3>

          {/* Div for the "Address + SVG" under the h3 "Crown Hotel" */}
          <div className="Image-wrapper">
            {/* Insert the little svg of the pointer/location element */}
            <div><img src={location} alt="location" /></div>

            {/* Address of the hotel */}
            <div className="text-wrapper">
              <p>14 Avenue East East west norwich uk</p>
              <p >GPS: 52.6221° N, 1.2411° E</p>
            </div>
          </div>

          {/* Simple h3 for the title "Direction"*/}
          <h3 className="direction-wrapper">Direction</h3>

          {/* Simple div to hold the text about "?" */}
          <div className="text-wrapper">
            <p>This single bed executive room is designed as a modern home design that help tou have a comfort luxury home experience designed to help you relax and enjoy your time</p>
          </div>

        </div>
      </div>

      {/* Simple h3 for text, might change to a h4 */}
      <h3 className='title-wrapper'>We are beyond a palace to relax</h3>
        
    </div>
  )
}

export default Accomodation
