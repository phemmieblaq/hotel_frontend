import React from 'react'
import './style.css'
import Header from '../../header'

import Faq from '../../faq'
import Footer from '../../footer'
import { Outlet } from 'react-router-dom'
import AnalyticCard from '../../../components/cards/analyticCard'



const AdminLayout = () => {
  return (
    <div>
        <div className="layout-container">
            <header>
                <Header
                admin/>
            </header>

            
            <body>
                <AnalyticCard
                title='Available rooms'
                number='78'/>
            <Outlet/>
            </body>
            
           
            
            
          

        </div>
    

      
    </div>
  )
}

export default AdminLayout
