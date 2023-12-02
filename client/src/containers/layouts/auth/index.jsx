import React from 'react'
import './style.css'


const AuthLayout = ({ heading, subHeading, children}) => {
  return (
    <div>
        <div className='mainAuthContainer'>
      <div className="authWrapper">
        <div className="innerAuthWrapper">
            <div className="authHeading">{heading}</div>
            <div className="authSubheading">{subHeading}</div>
            <div className="authInputWrapper">
               {children}

            </div>

        </div>

      </div>
      </div>
    </div>
  )
}

export default AuthLayout
