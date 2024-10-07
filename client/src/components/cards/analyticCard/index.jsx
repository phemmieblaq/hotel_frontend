import React from 'react'
import './style.css'

const AnalyticCard = ({ title, number, clickFun}) => {
  const handleClick = () =>{
    clickFun(title)
  }
  const colorstyle = {
    background: title === 'Available rooms' ? '#E9E7FE' :
      title === 'Checked out' ? '#FEFAE7' :
        title === 'Checked In' ? '#E7FEF3' :
          '#FEE7E9'
  };
  return (
    <div className="card-size" style={colorstyle} onClick={handleClick}>
      <h1 className="mainTitle">
        {title}
      </h1>
      <h2>{number}</h2>
    </div>
  )
}

export default AnalyticCard
