import React from 'react'
import './style.css'
import AccomBackground from '../../containers/AccomBackground'
import EventCards from '../../components/cards/eventCards'
import backGround from '../../assets/png/background.png'

function Events() {
    return (
        <div className='eventsBigDivs'>
            {/* background with image  */}
            <AccomBackground title={'Events Room'} />
            {/* main part */}
            <div className='eventsContainer'>
                <div className='eventHeading'>
                    <h2>Luxury meeting & Events venue</h2>
                    <p>Plan your event with ease with our spacious and luxury meeting rooms designed for your need, helping to create n unforgetable expirience</p>
                </div>
                <div className='eventCardContainer'>
                    <EventCards img={backGround} title={'Hall Revolve'} dimention={'10 X 22 X 3.6'} range={'20 - 60'}/>
                    <EventCards img={backGround} title={'Hall Revolve'} dimention={'10 X 22 X 3.6'} range={'20 - 60'}/>
                    <EventCards img={backGround} title={'Hall Revolve'} dimention={'10 X 22 X 3.6'} range={'20 - 60'}/>
                    <EventCards img={backGround} title={'Hall Revolve'} dimention={'10 X 22 X 3.6'} range={'20 - 60'}/>

                </div>
            </div>
        </div>
    )
}

export default Events
