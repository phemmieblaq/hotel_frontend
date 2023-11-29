import React from 'react'
import doubleBed from '../../../assets/png/doubleBed.png';
import house from '../../../assets/svg/house.svg';
import people from '../../../assets/svg/people.svg';
import wifi from '../../../assets/svg/wifi.svg';
import bed from '../../../assets/svg/house.svg'


import './style.css'
import Button from '../../button';
const HotelCard = ({ title, feet, noBeds, setValue, num }) => {
    return (
        // Entire card
        <div onClick={() => setValue(num)} className='Wrapper'>
            {/* Image on the card */}
            <div className="image-wrapper">
                <img src={doubleBed} alt="" />
            </div>
            {/* everything else on the card */}
            <div >
                {/* Title on the card- e.g 'Superior Double' */}
                <h1 className="cardTtitle"> {title}</h1>
                {/* Div for info on room dimetion and num of beds */}
                <div className="lower-wrapper">
                    <div className="icon-text">
                        {/* SVG of House */}
                        <div className="image-wrapper">
                            <img src={bed} alt="" />
                        </div>
                        {/* per Square feet info of room */}
                        <p> {feet}</p>
                    </div>
                    {/* SVG of bed */}
                    <div className="icon-text">
                        <div className="image-wrapper">
                            <img src={people} alt="" />
                        </div>
                        {/* Number of beds in the room */}
                        <p> {noBeds}</p>
                    </div>
                </div>
                {/* Div for 'Cozy yet fully equipped' and 'City view'*/}
                <div className="loweset-wrapper">
                    <div className="icon-text">
                        <div className="icon" />
                        <p> Cozy yet fully equipped</p>
                    </div>
                    <div className="icon-text">
                        <div className="icon" />
                        <p> City view</p>
                    </div>
                </div>
                {/* Insert 'ALL ROOMS INCLUDE' */}
                <h2>ALL ROOMS INCLUDE</h2>
                
                <div className="icon-text">
                    <div className="image-wrapper">
                        <img src={wifi} alt="" />
                    </div>
                    <p> Complementary high-speed Wifi</p>
                </div>

                <div className="lastWrapper">
                    <div className="buttonWrapper">
                        <Button title='Book Now' secondary />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelCard
