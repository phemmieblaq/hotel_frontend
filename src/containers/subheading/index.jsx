import React from 'react'
import './style.css'

const LinkHeading = ({mainHeading,content}) => {
  return (
    <div>
        <div className="mainHeadingWrapper">
<h1>{mainHeading}</h1>
<p>{content}</p>
        </div>
      
    </div>
  )
}

export default LinkHeading
