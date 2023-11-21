import React from 'react'
import hall from '../../assets/png/hall.jpeg'
import house from '../../assets/svg/house.svg'
import people from '../../assets/svg/people.svg'
import './style.css';


const Hall = ({hallPicture = hall, 
  hallHeading = 'Hall Revolve',
  dimension ='10 X 22 X 3.6',
  rangeOfPeople ='20-60 Adults', 
  theater ='50',
  classRoom = '60', 
  shape ='45',
details='The larger half of the ballroom, with natural daylight, is ideal for conferences with breakout sessions. Enjoy a range of layouts and state-of-the-art equipment.'}) => {
  return (
    <div>
        <div className="hall-wrapper">
          <div className="hall-image-wrapper">
            <img src={hallPicture} alt="hall" className='hall-image'/>

          </div>
         
          <div className="hall-content">
            <div className='revolve'>
            <h4>{hallHeading}</h4>
            <div id="iconWrapper">
              <div>
              <img src={house} alt="" />
              </div>
              <p>{dimension}</p>
           

            </div>
            <div id="iconWrapper">
              <div>
              <img src={people} alt="" />
              </div>
              <p>{rangeOfPeople}</p>
           

            </div>
            
            </div>
            <h5>SEATING PLAN</h5>
            <div className="plan_container">
             
              <h6>Theater: {theater}</h6>
              <div className="dotWrapper">
                <div className="dot"/>
              <h6>Class room: {classRoom}</h6>
              </div>
              
              <div className="dotWrapper">
                <div className="dot"/>
              <h6>U shape: {shape}</h6>
              </div>


            </div>
            <p className="details">{details}</p>
          </div>
          

        </div>
             </div>
  )
}

export default Hall
