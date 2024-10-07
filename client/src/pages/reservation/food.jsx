import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import MealCard from '../../components/cards/mealCard'
import { useParams } from 'react-router-dom';



const Food = () => {
  const { booking_ref } = useParams();
  // console.log("Food" + booking_ref)
  const [foodData, setFoodData] = useState([]);

  const getFood = async () => {
    //Make a POST request using Axios
    try {
      const response = await axios.get('http://localhost:3001/reservations');

      setFoodData(response.data.food.data)
    }
    catch (error) {
      // Handle the error
      console.error(error)
    }
  }

  useEffect(() => {
    getFood();
  }, []);

  return (
    <div className='mealCards'>
      {foodData?.map((el, index) => {
        return <MealCard key={index} mealTitle={el.dish_name} price={el.price_pounds}/>;
      })}
    </div>
  )
}

export default Food
