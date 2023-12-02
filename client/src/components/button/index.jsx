import React from 'react'
import './style.css'

const Button = ({title,secondary,onClick=()=>{}}) => {
  return (
    <div onClick ={onClick} className='mainButtonWrapper'>
        {!secondary?(
    <button  className="primary">
    <p>{title}</p> 
      
    </button >):(
    
    <button className='secondary'>
       <p>{title}</p> 
    </button>)}
    </div>
  )
}

export default Button
