import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import MealCard from '../../components/cards/mealCard'
const Drinks = () => {

  const [drinksData, setDrinksData] = useState([]);

  const getDrinks = async () => {
    //Make a POST request using Axios
    try {
      const response = await axios.get('http://localhost:3001/reservations/drinks');

      setDrinksData(response.data.drinks.data)
    }
    catch (error) {
      // Handle the error
    }
  }

  useEffect(() => {
    getDrinks();
  }, []);


  return (
    <div className='mealCards'>
    {drinksData?.map((el, index) => {
      return <MealCard key={index} mealTitle={el.drink_name} price={el.price_pounds}  />;
    })}
  </div>
  )
}

export default Drinks
