import React, { useEffect, useState } from 'react'
import cancel from '../../assets/svg/cancel.svg'
import phone from '../../assets/icons/phone.svg'
import { headerLink } from '../header/constant'
import './style.css'

import OtherButton from '../../components/button/OtherButton'
import { useNavigate } from 'react-router-dom'

const Drawer = ({action}) => {
    const [userData, setUserData] = useState(null);
    let  navigate = useNavigate()
    const logInNavigation = () => {
        navigate('/signin')
    }
    const logOutNavigation = () => {
        localStorage.clear();
        navigate('/signin')
        window.location.reload();
        
    }
    

    useEffect(() => {
        // Retrieve data from localStorage
        const storedData = localStorage.getItem("userInfo");
    
    
        // Parse the stored data if it exists
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setUserData(parsedData);
        }
    
      }, []);
      console.log('userdata', userData)
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
         title={userData?.logged_in ?  'Log out': 'Log in'}
         onClick={userData?.logged_in ?logOutNavigation:logInNavigation}
         secondaryWhite/>
   

   </div>
   <div className="contactWrapper">
        
               
         <OtherButton
         primaryWhite
         title='Book Now'
         onClick={()=>(navigate('/booking'))}/>
   

   </div>

            </div>
      </div>
    
  )
}

export default Drawer
