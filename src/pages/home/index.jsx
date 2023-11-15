import React from 'react'
import MainBackground from '../../containers/mainBackground'
import './style.css';
import HotelCard from '../../components/cards/hotelCard';

const Home = () => {
  return (
    <div>
        <div className="textLogoWrapper">
            <MainBackground/>
    
        
        <h1 >Choose your perfect sanctuary</h1>
        </div>
        <div className="card-wrapper">
       <HotelCard/>
       <HotelCard/>
       <HotelCard/>
        </div>
        
      
    </div>
  )
}

export default Home
