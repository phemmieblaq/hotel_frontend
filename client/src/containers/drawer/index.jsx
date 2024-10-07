import React from 'react'
import cancel from '../../assets/svg/cancel.svg'
import phone from '../../assets/icons/phone.svg'
import { headerLink } from '../header/constant'
import './style.css'

import OtherButton from '../../components/button/OtherButton'

const Drawer = ({action}) => {
  return (
 
      <div className="drawerWrapper">
        <div className="cancelWrapper" onClick={action}>
            <div className="cancelImageWrapper">
<img src={cancel} alt="" />
            </div>
            

        </div>
        <div className="mobileLinkWrapper">
            {headerLink?.map((el, index)=>(
                <p key={index}>
                    <a href={el?.path}>{el?.title}</a>
                    </p>
            ))}

            </div>
            <div className="lastMobileWrapper">
            <div className="contactWrapper">
                <div className="logoWrapper">
                    <div>
                <img src={phone} alt="logo" />
                </div>
                    <p className='phoneNumber'> 016324 8934 </p>
                </div>

                    
                </div>

                <div className="contactWrapper">
        
               
         <OtherButton
         title='Log In'
         secondaryWhite/>
   

   </div>
   <div className="contactWrapper">
        
               
         <OtherButton
         primaryWhite
         title='Book Now'/>
   

   </div>

            </div>
      </div>
    
  )
}

export default Drawer
