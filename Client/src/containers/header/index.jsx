import React from 'react'
import MainCrownLogo from '../../assets/svg/MainCrownLogo.svg'
import ActiveNav from '../../components/activeNav'
import Phoneblack from '../../../src/assets/icons/Phoneblack.svg';

import './style.css'
import Button from '../../components/button';


const Header = () => {
  return (
    <div>
        <div className="allWrapper">
            <div className="innerWrapper">
                <div className="logoWrapper">
                    <div>
                <img src={MainCrownLogo} alt="logo" />
                </div>
                    <h1>Crown Hotel</h1>
                </div>
                <div className="linkWrapper">
                <ActiveNav path='/accomodation'
    text='Acccomodation'/> 
    <ActiveNav
    path='/experience'
    text='Experience'/> 
    <ActiveNav
    path='/events'
    text='Event Rooms'/>
     <ActiveNav
    path='/faqs'
    text='FAQs'/>
   
                  
                </div>
                <div className="subWrapper">
                <div className="contactWrapper">
                <div className="logoWrapper">
                    <div>
                <img src={Phoneblack} alt="logo" />
                </div>
                    <p> 016324 8934 </p>
                </div>

                    
                </div>
                
                <div className="contactWrapper">
        
               
                    <p className='text'> Log in </p>
               

                    
                </div>
                <div className="contactWrapper">
        
               
         <Button
         title='Book Now'/>
   

   </div>
    </div>
            </div>

        </div>
      
    </div>
  )
}

export default Header
