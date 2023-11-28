import React from 'react'
import './style.css'

function MiniDescription({image, text}) {
  return (
    <div className='miniDesc'>
      <img height="20px" width="20px" src={image}/>
      <p>{text}</p>
    </div>
  )
}

export default MiniDescription
