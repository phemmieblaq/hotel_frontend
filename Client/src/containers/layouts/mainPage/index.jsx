import React from 'react'
import './style.css'
import Header from '../../header'

import Faq from '../../faq'
import Footer from '../../footer'
import { Outlet } from 'react-router-dom'


const LandingPageLayout = () => {
  return (
    <div>
      <div className="layout-container">
        {/* Header */}
        <header>
          <Header/>
        </header>

        {/* Body */}
        <body>
          <Outlet/>
        </body>

        {/* FAQ */}
        <div className="faq-section">
          <Faq/>
        </div>

        {/* Footer */}
        <footer>
          <Footer/>
        </footer>
        
      </div>
    </div>
  )
}

export default LandingPageLayout
