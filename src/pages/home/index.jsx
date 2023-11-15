import React from 'react'
import MainBackground from '../../containers/mainBackground'
import './style.css';
import HotelCard from '../../components/cards/hotelCard';
import MapContainer from '../../containers/map';
import location from '../../assets/svg/location.svg'

const Home = () => {
  return (
    <div>
        <div className="textLogoWrapper">
            <MainBackground/>
    
        
        <h1 className='title-wrapper'>Choose your perfect sanctuary</h1>
        </div>
        <div className="card-wrapper">
       <HotelCard/>
       <HotelCard/>
       <HotelCard/>
       
        </div>
       
        <h2 className='title-wrapper'>Location</h2>
        <div className="map-wrapper">
        <MapContainer />
        <div className="right-container">
            <div className="heading-wrapper">
            Crown Hotel
            </div>
            <div className="Image-wrapper">
                <div>
                <img src={location} alt="location" />
                </div>
                <div className="text-wrapper">
                <p>14 Avenue East East west norwich uk</p>
                <p >GPS: 52.6221° N, 1.2411° E</p>
                </div>
                
            </div>
            <div className="direction-wrapper">
           Direction
            </div>
            <div className="text-wrapper">
            <p>This single bed executive room is designed as a modern home design that help tou have a comfort luxury home experience designed to help you relax and enjoy your time</p>
            </div>
          
               
               
          

        </div>
        </div>
        <h3 className='title-wrapper'>We are beyond a palace to relax</h3>
        
      
    </div>
  )
}

export default Home
