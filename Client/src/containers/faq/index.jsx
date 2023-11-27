import React from 'react'
import { faq } from './constant'
import Accordion from '../../components/accordion';
import './style.css';


const Faq = () => {
  return (
    // Div to hold the entire FAQ response
    <div className="all-wrapper">
      {/* Simple h4 for the title of the section */}
      <h4 className="heading"> FAQs</h4>

      {/* Div to hold all the questions */}
      <div className="question-container">
        {/* loop through all the objects in "faq"; the "?" simply checks that the faq isn't empty. "el" is each object mapped and index is it's index */}
        {faq?.map((el,index) => (
          // key is used to uniuely identify a div; required of react when using the map() function 
          <div key= {index }>
            {/* Add an Accordian component for every faq in the list */}
            <Accordion question={el?.question} answer={el?.answer}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq
