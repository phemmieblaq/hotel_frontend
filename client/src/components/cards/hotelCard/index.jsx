import React from 'react'
import doubleBed from '../../../assets/png/doubleBed.png';
import house from '../../../assets/svg/house.svg';
import people from '../../../assets/svg/people.svg';
import wifi from '../../../assets/svg/wifi.svg';


import './style.css'
import Button from '../../button';
const HotelCard = ({onClick=()=>{},title ='Deluxe Room' , price='$45/night', size,noOfPeople, accomodation,description1, description2, img=doubleBed}) => {
  return (
    <div className='Wrapper'>
        <div className="image-wrapper">
            <img src={img} alt="hotel" />

        </div>
        <div >
            <h1 className="title"> {title}</h1>
            <div className="lower-wrapper">
                <div className="icon-text">
                    <div className="image-wrapper">
                    <img src={house} alt="" /> 
                   
                    </div>
                    <p> {size}</p>
                </div>
                <div className="icon-text">
                    <div className="image-wrapper">
                    <img src={people} alt="" /> 
                   
                    </div>
                    <p> {noOfPeople} {noOfPeople > 1?'Adults':'Adult'}</p>
                </div>

                 </div>
                 <div className="loweset-wrapper">
                <div className="icon-text">
                    <div className="icon"/>
                
                    <p> {description1}</p>
                    
                </div>
                <div className="icon-text">
                <div className="icon"/>
                   
                <p> {description2}</p>
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
            &#163;{price}/night
            </p>
            <div className="buttonWrapper">
            <Button
      title ={accomodation? 'View Details':'Book Now'}
      secondary
      onClick={onClick}/>
      </div>
        </div>



        </div>
      
    </div>
  )
}

export default HotelCard
