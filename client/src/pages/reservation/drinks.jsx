import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import MealCard from '../../components/cards/mealCard'
import { useParams } from 'react-router-dom';



const Drinks = () => {
  // get the booking ref number
  const { booking_ref } = useParams();
  // console.log("Drinks: " + booking_ref)

  const [drinksData, setDrinksData] = useState([]);

  const getDrinks = async () => {
    //Make a GET request using Axios
    try {
      const response = await axios.get('http://localhost:3001/reservations/drinks');

      setDrinksData(response.data.drinks.data)
    }
    catch (error) {
      // Handle the error
    }
  }
  const addDrinkToBooking = async () => {
    try {
      const response = await axios.post('http://localhost:3001/reservations/drinks', {r_ref:booking_ref, price:""});
      console.log(response)

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
      return <MealCard key={index} mealTitle={el.drink_name} price={el.price_pounds} fun={addDrinkToBooking} />;
    })}
  </div>
  )
}

export default Drinks
