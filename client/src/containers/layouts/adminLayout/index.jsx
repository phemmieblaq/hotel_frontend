import React, { useState } from 'react'
import './style.css'
import Header from '../../header'
import AnalyticCard from '../../../components/cards/analyticCard'
import Receptionist from '../../../pages/receptionist'
import Footer from '../../footer'
import Home from '../../../pages/home'



const AdminLayout = () => {
  const [val, setVal] = useState('Receptionist')
  const handleSetVal = (selectedVal) => {
    setVal(selectedVal)
  }
  return (
    // <div className="layout-container">
    //   <header>
    //     <Header admin handleSelect={handleSetVal} />
    //   </header>

    //   <main>
    //     {/* <AnalyticCard title='Available rooms' number='78' /> */}
    //     <Receptionist user={val} />
    //   </main>
    // </div>
    // <div>
    <div>
      <div className="layout-container">
        <header>
          <Header admin handleSelect={handleSetVal} />
        </header>

        <main className='mainClass'>
          {/* <AnalyticCard title='Available rooms' number='78'/> */}
          <Receptionist user={val} />
          {/* <Home/> */}
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default AdminLayout
