import React from 'react'
import './style.css'

const Button = ({title,secondary,onClick}) => {
  return (
    <div>
        {!secondary?(
    <button onClick ={onClick} className="primary">
    <p>{title}</p> 
      
    </button >):(
    
    <button className='secondary'>
       <p>{title}</p> 
    </button>)}
    </div>
  )
}

export default Button
