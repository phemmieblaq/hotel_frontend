import React from 'react'
import './style.css'
import Header from '../../header'

import Faq from '../../faq'
import Footer from '../../footer'
import { Outlet } from 'react-router-dom'


const LandingPageLayout = () => {
  let parsedData;
  const storedData = localStorage.getItem("userInfo");
  // console.log('storedData:', storedData);
  if (storedData) {
    try {
      parsedData = JSON.parse(storedData);
    } catch (error) {
      console.error('Error parsing storedData:', error);
    }
    if (parsedData && typeof parsedData === 'object') {
      // console.log(parsedData?.logged_in);
    }
  }
  return (
    <div>

      <div className="layout-container">
        <header>
          <Header loggedIn={parsedData?.logged_in} />
        </header>

        <main>
          <Outlet />
        </main>

        <div className="faq-section">
          <Faq />
        </div>
        
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default LandingPageLayout
