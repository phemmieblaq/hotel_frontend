import React from 'react'
import doubleBed from '../../../assets/png/doubleBed.png';
import house from '../../../assets/svg/house.svg';
import people from '../../../assets/svg/people.svg';
import wifi from '../../../assets/svg/wifi.svg';


import './style.css'
import Button from '../../button';
const HotelCard = ({title ='Deluxe Room' , price='$45/night'}) => {
  return (
    <div className='Wrapper'>
        <div className="image-wrapper">
            <img src={doubleBed} alt="" />

        </div>
        <div >
            <h1 className="title"> {title}</h1>
            <div className="lower-wrapper">
                <div className="icon-text">
                    <div className="image-wrapper">
                    <img src={house} alt="" /> 
                   
                    </div>
                    <p> 20 sqm / 215 sqft</p>
                </div>
                <div className="icon-text">
                    <div className="image-wrapper">
                    <img src={people} alt="" /> 
                   
                    </div>
                    <p> 1 Adult</p>
                </div>

                 </div>
                 <div className="loweset-wrapper">
                <div className="icon-text">
                    <div className="icon"/>
                
                    <p> Cozy yet fully equipped</p>
                    
                </div>
                <div className="icon-text">
                <div className="icon"/>
                   
                    <p> City view</p>
                    </div>
               
                
                 </div>
                 
                 
                 <h2>ALL ROOMS INCLUDE</h2>
                 <div className="icon-text">
                    <div className="image-wrapper">
                    <img src={wifi} alt="" /> 
                   
                    </div>
                    <p> Complementary high-speed Wifi</p>
                </div>

        <div className="lastWrapper">
            <p className="price">
                {price}
            </p>
            <Button
      title ='Book Now'
      secondary/>
        </div>



        </div>
      
    </div>
  )
}

export default HotelCard
