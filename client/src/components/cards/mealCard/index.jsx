import React from 'react'
import Button from '../../button'
import meal1 from '../../../assets/meal/meal1.png'
import './style.css'
const MealCard = ({mealTitle='Korean-style shrimps burger',price = '$10', img=meal1}) => {
  return (
   
      <div className="mealContainer">
        <div className="innerMealContainer">
            <div className="mealImage">
                <img src={img} alt="" />
            </div>
            <h1 className="mealTitle">
{mealTitle}
            </h1>
            <div className="pricebuttonFlex">
                <div className="mealPrice">
                    {price}
                </div>
                <div className="cartButtonWrapper">
<Button
title='add to cart'
secondary/>
                </div>
            </div>
        </div>
      </div>
  
  )
}

export default MealCard
