import React from 'react'
import background from '../../assets/png/background.png';
import './style.css'


const MainBackground = () => {
  return (
    
      <div className="imageWrapper">
        <div className='backgroundWrapper'>
        <img src={background} alt="bg"  className="custom-image"/>
        <div className="small-container">
           <h1>Comfortable home away from home</h1>
           <p>We offers varieties of comfortable rooms, a gym, bar and restaurant with amazing offers that help you live a luxury expenses without breaking the bank</p>
           {/* date input  */}
            
        </div>
        </div>
      </div>
    
  )
}

export default MainBackground
