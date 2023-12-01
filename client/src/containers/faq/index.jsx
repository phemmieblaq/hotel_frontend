import React from 'react'
import { faq } from './constant'
import Accordion from '../../components/accordion';
import './style.css';


const Faq = () => {
  return (
    <div className="all-wrapper">
        <h1 className="heading">
        FAQs
        </h1>
        <div className="question-container">
            {faq?.map((el,index) => (
            <div key= {index }>
                <Accordion
                question={el?.question}
                answer={el?.answer}
                />


            </div>

            ))}

        </div>

      
    </div>
  )
}

export default Faq
