import React from 'react'
import './style.css'
import MiniDescription from '../../miniDescription'
import house from '../../../assets/svg/house.svg'
import people from '../../../assets/svg/people.svg'


function EventCards({ img, title, dimention, range, theater, classroom, u_shape, text, sendReq}) {
    return (
        // Entire Card 
        <div className='eventCardWrapper'>
            {/* Image div - Left side of the card */}
            <div className='eventCardImageDiv'>
                <img className='eventCardImage' src={img} alt=''/>
            </div>
            {/* Info div - right side of the card */}
            <div className='eventCardInfo'>
                <h2>{title}</h2>
                <div className='eventCardMiniDescription'>
                    <MiniDescription image={house} text={dimention} />
                    <MiniDescription image={people} text={range} />
                </div>
                <div className='eventCardSeatingPlan'>
                    <h3>Seating Plan</h3>
                    <p>Theater: {theater}</p>
                    <p>Class Room: {classroom}</p>
                    <p>U Shape: {u_shape}</p>
                </div>
                <p>{text}</p>
                <div><button onClick={sendReq}>Request for Proposal</button></div>
            </div>
        </div>
    )
}

export default EventCards
