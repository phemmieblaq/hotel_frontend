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
        <div onClick={() => setValue(num)} className='Wrapper'>
            <div className="image-wrapper">
                <img src={doubleBed} alt="" />

            </div>
            <div >
                <h1 className="title"> {title}</h1>
                <div className="lower-wrapper">
                    <div className="icon-text">
                        <div className="image-wrapper">
                            <img src={bed} alt="" />

                        </div>
                        <p> {feet}</p>
                    </div>
                    <div className="icon-text">
                        <div className="image-wrapper">
                            <img src={people} alt="" />

                        </div>
                        <p> {noBeds}</p>
                    </div>

                </div>
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

                <h2>ALL ROOMS INCLUDE</h2>
                <div className="icon-text">
                    <div className="image-wrapper">
                        <img src={wifi} alt="" />

                    </div>
                    <p> Complementary high-speed Wifi</p>
                </div>

                <div className="lastWrapper">
                    <div className="buttonWrapper">
                        <Button
                            title='Book Now'
                            secondary />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelCard
