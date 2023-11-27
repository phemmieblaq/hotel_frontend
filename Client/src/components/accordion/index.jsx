import React from 'react';
import { useState } from 'react';
import Expand from '../../../src/assets/svg/Expand.svg';
import Collapse from '../../../src/assets/svg/Collapse.svg';
import './style.css';



const Accordion = ({question, answer}) => {
  const [collapsed, setCollapsed] = useState(false);

  const changeState = () =>{
    // Toggle the collapsed variable btw true and false
    setCollapsed(!collapsed);
  }
    
  return (
    // Wrapper for the entire "Accordion" Componet 
    <div className="all-container">
      {/* Wrapper for the question + the collapse or expand symbol "+" or "-" */}
      <div className="small-wrapper">

        {/* Put the question from the object into a paragraph and display it */}
        <p className="question"> {question} </p>

        {/* Check if the state is collapsed or not and display the appropriate "+" or "-" as a div */}
        <div className="ImageWrapper" onClick={changeState}>
          {collapsed?(
              <img src={Expand} alt="" />
            ):
              <img src={Collapse} alt="" />
          }
        </div>
        
      </div>

      {/* If collapsed is true; render the h2 element */}
      {collapsed && (<h2 className="answer">{answer}</h2>)}
        
    </div>
  )
}

export default Accordion 
