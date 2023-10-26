import React from 'react'
import './style.css'

const Button = ({title,secondary}) => {
  return (
    <div>
        {!secondary?(
    <button className="primary">
    <p>{title}</p> 
      
    </button >):(
    
    <button className='secondary'>
       <p>{title}</p> 
    </button>)}
    </div>
  )
}

export default Button
