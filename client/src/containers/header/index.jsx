import React, { useEffect } from 'react'
import MainCrownLogo from '../../assets/svg/MainCrownLogo.svg'
import hamburger from '../../assets/svg/hamburger.svg'

import ActiveNav from '../../components/activeNav'
import Phoneblack from '../../assets/icons/Phoneblack.svg';

import './style.css'
import Button from '../../components/button';
import { headerLink } from './constant';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import Drawer from '../drawer';
import DropDownInput from '../../components/input/dropDownInput';


const Header = ({ admin, handleSelect}) => {
    const [userData, setUserData] = useState(null);

    const handleHeaderDropdownSelect = (selectedValue) => {     // Set the headerDropdownvalue to be the selected one
        handleSelect(selectedValue);
    };
    const options = ['Receptionist', 'HouseKeeper']

    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(true);
    }
    const handleClose = () => {
        setToggle(false);
    }

    let navigate = useNavigate();

    const homeNavigation = () => {
        navigate('/')
    }

    const logInNavigation = () => {
        navigate('/signin')
    }
    const logOutNavigation = () => {
        localStorage.clear();
        navigate('/signin')
        window.location.reload();
        
    }
    const bookingNavigation = () => {
        navigate('/booking')
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
    const matches = useMediaQuery("(max-width:1305px)");
    return (
        <div>
            <div className="allWrapper">
                <div className="innerWrapper">
                    <div className="logoWrapper" onClick={homeNavigation}>
                        <div>
                            <img src={MainCrownLogo} alt="logo" />

                        </div>
                        <h1 >Crown Hotel</h1>
                    </div>
                    {!admin &&
                        <div className="linkWrapper">
                            {headerLink?.map((el, index) => (
                                <ActiveNav path={el?.path} text={el?.title} key={index} />
                            ))}
                        </div>}
                   

                        <div className="subWrapper">
                        {!admin &&
                            <div className="contactWrapper">
                                <div className="logoWrapper">
                                    <div>
                                        <img src={Phoneblack} alt="logo" />
                                    </div>
                                    <p> 016324 8934 </p>
                                </div>
                            </div>}

                            <div className="contactWrapper">
                                {userData?.logged_in ?
                                <p onClick={logOutNavigation} className='text' > Log out </p>
                            : <p onClick={logInNavigation} className='text' > Log in </p>}
                            </div>
                            {!admin &&
                            <div className="contactWrapper">
                                <Button title='Book Now' onClick={bookingNavigation}/>

                            </div>}
                        </div>
                    {admin &&
                        <div className="dropWrapper">
                            <DropDownInput Options={options} setValue={handleHeaderDropdownSelect} initialValue={options[0]}/>

                        </div>
                    }
                    {matches && !toggle && !admin && (
                        <div className="harmburgerWrapper">

                            <div>
                                <img src={hamburger} alt="logo" onClick={handleToggle} />
                            </div>
                        </div>)}
                </div>
            </div>
            {matches && toggle && <Drawer action={handleClose} />}

        </div>
    )
}
export default Header
