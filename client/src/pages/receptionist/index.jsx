import React from 'react'
import { analytics, rooms } from './constant'
import AnalyticCard from '../../components/cards/analyticCard'
import './style.css'
import StatusCard from '../../components/cards/statusCard'

const Receptionist = () => {
  return (
    <div>
      <div className="statusWrapper">
        {analytics?.map((el, index)=>(
            <AnalyticCard
            key={index}
            title={el?.title}
            number={el?.number}/>
        ))}
        
      </div>
      <div className="statusCardContainer">
        <div className="filterflex">
        <p className="rightTitle">
        Rooms 
        </p>
        {/* {dropdown} */}
        </div>
        <div className="cardMap">
            {rooms.map((el,index) =>(
<StatusCard/>
            ))}
        </div>

      </div>
    </div>
  )
}

export default Receptionist
