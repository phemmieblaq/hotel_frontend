import React, { useState } from 'react'
import './style.css'
import Header from '../../header'
import AnalyticCard from '../../../components/cards/analyticCard'
import Receptionist from '../../../pages/receptionist'



const AdminLayout = () => {
  const [val, setVal] = useState('Reception')
  const handleSetVal = (selectedVal)=>{
    setVal(selectedVal)
  }
  return (
    <div>
        <div className="layout-container">
            <header>
                <Header admin handleSelect={handleSetVal}/>
            </header>

            <main>
                <AnalyticCard
                title='Available rooms'
                number='78'/>
            <Receptionist user={val}/>
            </main>
        </div>      
    </div>
  )
}

export default AdminLayout
