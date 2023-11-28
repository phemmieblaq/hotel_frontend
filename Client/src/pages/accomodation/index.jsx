/*
  Notes:-

  Caleb: 
  1.) <MainBackground/> shouldn't be main background, should be another image; couldn't find it
*/

import React from 'react';
import MainBackground from '../../containers/mainBackground';
import doubleBed from '../../assets/png/doubleBed.png';
import './style.css';
import HotelCard from '../../components/cards/hotelCard';
import location from '../../assets/svg/location.svg'

const Accomodation = () => {
  return (
    // Container for the whole Home Component
    <div>
      {/* This is a div for the background image and the text "Choose your perfect sanctuary" */}
      <div className="textLogoWrapper">
        {/* Background image */}
        <MainBackground/>

        {/* Text */}
        <h1 className='title-wrapper'>Choose your perfect sanctuary</h1>
      </div>

      <div>
        <div>
          <image src={doubleBed}/>
        </div>
      </div>

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
