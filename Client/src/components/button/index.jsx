import React from 'react'
import './style.css'

const Button = ({title, onClick}) => {
  return (
    <button className='primary'>
       <p>{title}</p> 
    </button>)
}

export default Button
