/*
    Note:-
    Caleb:
    1.) Log in should be a button component, currently a "p"
    2.) On click of the Logo/title should route user to path="/"
    3.) For now added an extra "Active nav"; 'Home'. For easy building/naviagtion btw accomodation and home
*/

import React from 'react'
import {useState } from 'react';
import MainCrownLogo from '../../assets/svg/MainCrownLogo.svg'
import ActiveNav from '../../components/activeNav'
import Phoneblack from '../../../src/assets/icons/Phoneblack.svg';

import './style.css'
import Button from '../../components/button';


const Header = () => {
    const [togClass, setTogClass] = useState('linkWrapper')

    const handleClick = () =>{
        setTogClass(togClass === 'linkWrapper' ? 'nav-active' : 'linkWrapper');
    }

  return (
    // <div>
        <nav className="allWrapper">
            <div className="innerWrapper">
                {/* Logo + Logo Name wrapper*/}
                <div className="logoWrapper">
                    <div><img src={MainCrownLogo} alt="logo" /></div>
                    <h1>Crown Hotel</h1>
                </div>

                {/* Wrapper for the links in the nav bar */}
                <div className={togClass}>
                    <ActiveNav path='/'text='Home'/> 
                    <ActiveNav path='/accomodation'text='Rooms'/> 
                    <ActiveNav path='/experience' text='Experience'/> 
                    <ActiveNav path='/events' text='Event'/>
                    <ActiveNav path='/faqs' text='FAQs'/>
                </div>

                {/* Wrapper for the "phone number", "Log in" and "Book Now" button */}
                <div className="subWrapper">
                    {/* Phone image(svg) + phone number */}
                    <div className="contactWrapper">
                        <div className="logoWrapper">
                            <div><img src={Phoneblack} alt="logo" /></div>
                            <p> 016324 8934 </p>
                        </div>
                    </div>

                    {/* Log in button */}
                    <div className="contactWrapper">
                        <p className='text'> Log in </p>
                        {/* <Button title={'Log in'}/> */}
                    </div>

                    {/* Book Now Button */}
                    <div className="contactWrapper">
                        <Button title='Book Now'/>
                    </div>
                </div>

                {/* Burger for mobile*/}
                <div className='burger' onClick={handleClick}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </nav>
    // </div>
  )
}

export default Header
