import React from 'react'
import './style.css';

const NorwichAreas = ({leftPicture,rightPicture,leftTitle,rightTitle}) => {
  return (
    <div>
        <div className="experience-wrapper">
          <div className="left-container-image">
            <img src={leftPicture} alt="left" className='left-picture' />
            <div className="headingWrapper">
            <div className="picture-caption">
              <h4 className="experience-heading">
              {leftTitle}
              </h4>
              </div>
              



            </div>
          </div>
      <div className="right-container-image">
   
            <img src={rightPicture} alt="right" className='right-picture' />
            <div className="headingWrapper">
            <div className="picture-caption">
              <h4 className="experience-heading">
              {leftTitle}
              </h4>
              </div>
              



            </div>

        </div>
        
        </div>
    </div>
  )
}

export default NorwichAreas
