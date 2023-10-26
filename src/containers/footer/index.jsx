import React from 'react'
import CrownLogo from '../../../src/assets/svg/CrownLogo.svg';
import facebook from '../../../src/assets/socials/facebook.svg';
import instagram from '../../../src/assets/socials/instagram.svg';
import twitter from '../../../src/assets/socials/twitter.svg';
import phone from '../../../src/assets/icons/phone.svg';
import email from '../../../src/assets/icons/email.svg';
import copyright from '../../../src/assets/icons/copyright.svg';






import './style.css';

const Footer = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="main-container">
        <div className="inner-wrapper">
          <div className="inner-container">
          <div className="first-container">
            <div className="logo-container">
              <div className="logo-content">
                <div className="logo-wrapper">
                  <div className="image-wrapper">
                    <img src={CrownLogo} alt="logo" />

                  </div>
                  <p className="logo-title">Crown Hotel</p>
                </div>
                <p className="content-details">This single bed executive room is designed as a modern home design that help tou have a comfort luxury home experience designed to help you relax and enjoy your time</p>

              </div>
              <div className="socials">
                <div className="icon-wrapper">
                  <img src={facebook} alt="" />
                </div>
                <div className="icon-wrapper">
                  <img src={instagram} alt="" />
                </div>
                <div className="icon-wrapper">
                  <img src={twitter} alt="" />
                </div>

              </div>

            </div>
          </div>
          <div className="second-container">
            <h1 className="title">
            Quick links
            </h1>
            <div className="links-wrapper">
              <p className="link">Rooms</p>
              <p className="link">Facilities</p>
              <p className="link">Event rooms</p>
              <p className="link">Offers</p>
              <p className="link">FAQ</p>


            </div>

            
          </div>
          <div className="third-container">
          <h1 className="title">
           Find Us
            </h1>
            <p className="address">Crowns Hotel, <br /> Tombland, <br />Norwich, <br />NR 12c</p>
            <h2 className="subheading">Contact Us</h2>
            <div className="phone-logo-wrapper">
              <div className="icon-wrapper">
                <img src={phone} alt="" />
              </div>
              <div className="contact">
              <p className="phonenumber">016324 8934</p>
              </div>

            </div>
            <div className="email-logo-wrapper">
              <div className="icon-wrapper">
                <img src={email} alt="" />
              </div>
              <div className="contact">
              <p className="email"> reservatiion@crownhotel.co.uk</p>
              </div>
            </div>
          </div>
          
          </div>
        </div>
        <div className="copyright-wrapper">
        <div className="copyright">
          <div className="icon-wrapper">
            <img src={copyright} alt="" />

          </div>
          <p>All right reserved. 2023</p>
          </div>
        </div>
      </div>
      </div>
      
      
    </div>
  )
}

export default Footer
