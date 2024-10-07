import React from 'react'
import './style.css'

const OtherButton = ({title,primaryWhite,secondaryWhite,onClick=()=>{}}) => {
  return (
    <div onClick ={onClick} className='mainButtonWrapper'>
        {primaryWhite &&
    <button  className="primaryWhite">
    <p>{title}</p> 
    </button >}
    {secondaryWhite &&
    <button  className="secondaryWhite">
    <p>{title}</p> 
    </button >}
      
    </div>
  )
}

export default OtherButton
