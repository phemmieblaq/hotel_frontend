import React from 'react';
import { useState } from 'react';
import Expand from '../../assets/svg/Expand.svg';
import Collapse from '../../assets/svg/Collapse.svg';
import './style.css';



const Accordion = ({
    question='What are the check-in and check-out time at Crown Hotel?',
    answer='Check-in at Crown Hotel is at 3.00 pm and check-out is at 12.00 am.'

}) => {

    const [collapsed, setCollapsed] = useState(false);
    
  return (
    <div className="all-containers">
    <div className="small-wrapper">
        <p className="question">
            {question}
        </p>
        <div className="ImageWrapper" onClick={() => setCollapsed(!collapsed)} >
          {!collapsed?(
            
            <img src={Collapse} alt="" />
          ):
          <img src={Expand} alt="" />}

        </div>
        </div>

        
        {collapsed && (
        <h2 className="answer">
            {answer}
        </h2>

       )}
        
    </div>
  )
}

export default Accordion 
