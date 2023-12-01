import React from 'react'
import otherBg from '../../assets/png/background.jpeg';
import './style.css'

const OtherBg = ({title}) => {
  return (
    <div className="bgWrapper">
        <div className='backgroundWrapper'>
        <img src={otherBg} alt="bg"  className="custom-bg"/>
 <div className="inner-container_bg">
    <div className="content_title">
    {title}
    </div>

 </div>

        </div>
      </div>
    
  )
}

export default OtherBg
