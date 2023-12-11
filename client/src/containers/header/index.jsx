import React from 'react'
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


const Header = ({ admin }) => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(true);
    }
    const handleClose = () => {
        setToggle(false);
    }

    let navigate = useNavigate();
    const options = ['Receptionist', 'HouseKeeper']

    const homeNavigation = () => {
        navigate('/')
    }

    const logInNavigation = () => {
        navigate('/signin')
    }
    const matches = useMediaQuery("(max-width:1305px)");
    return (
        <div>
            <div className="allWrapper">
                <div className="innerWrapper">
                    <div className="logoWrapper" onClick={homeNavigation} >
                        <div>
                            <img src={MainCrownLogo} alt="logo" />
                        </div>
                        <h1 >Crown Hotel</h1>
                    </div>
                    {!admin &&
                        <div className="linkWrapper">
                            {headerLink?.map((el, index) => (
                                <ActiveNav
                                    path={el?.path}
                                    text={el?.title}
                                    key={index} />
                            ))}




                        </div>}
                    {!admin &&

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


                                <p onClick={logInNavigation} className='text' > Log in </p>



                            </div>
                            <div className="contactWrapper">


                                <Button
                                    title='Book Now'
                                    onClick={() => { navigate('/booking') }} />


                            </div>
                        </div>}
                    {admin &&
                        <div className="dropWrapper">

                            <DropDownInput
                                Options={options}





                                initialValue='Receptionist'
                            // setValue={handleGuestChange}



                            />
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
            {matches && toggle &&
                <Drawer
                    action={handleClose} />}

        </div>
    )
}

export default Header
