import React from 'react'
import AnalyticCard from '../../components/cards/analyticCard'
import './style.css'
import StatusCard from '../../components/cards/statusCard'
import axios from 'axios';
import { useState, useEffect } from 'react';

const Receptionist = () => {
  // Defult State wit all room counts at 'Zero'
  const [analytics, setAnalytics] = useState([
    { title: 'Booking', number: 0 },
    { title: 'Available rooms', number: 0 },
    { title: 'Unavailable rooms', number: 0 },
    { title: 'Checked out', number: 0 }
  ])
  // Bookings
  const [rooms, setRooms] = useState([])

  const addRoom = (title, roomNumber) => {
    // Create a new room
    const newRoom = {
      title: title,
      roomNumber: roomNumber,
    };

    // Update the state by adding the new room to the existing array
    setRooms((prevRooms) => [...prevRooms, newRoom]);
  };

  // Fetch the updatated data fro the database
  const fetchAccommodationFromBackend = async () => {
    try {
      let response = await axios.get('http://localhost:3001/management')

      setAnalytics([
        { title: 'Booking', number: response.data.bookings.no },
        { title: 'Available rooms', number: response.data.available.no },
        { title: 'Unavailable rooms', number: response.data.unavailable.no },
        { title: 'Checked out', number: response.data.checked_out.no }
      ]);
      for(let i = 0; i<response.data.bookings.no; i++){
        console.log(response.data.bookings.room_no[i])
        addRoom(response.data.bookings.room_type[i], response.data.bookings.room_no[i])
      }
    } catch (error) {
      console.error('Error fetching data from backend:', error);
    }
  };

  useEffect(() => {
    fetchAccommodationFromBackend()
    console.log("khbib")
  }, []);


  return (
    <div>
      <div className="statusWrapper">
        {analytics?.map((el, index) => (
          <AnalyticCard
            key={index}
            title={el?.title}
            number={el?.number} />
        ))}

      </div>
      <div className="statusCardContainer">
        <div className="filterflex">
          <p className="rightTitle">Bookings</p>
          {/* {dropdown} */}
        </div>
        <div className="cardMap">
          {rooms.map((el, index) => (
            <StatusCard key={index} roomNum={el.roomNumber} roomType={el.title} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Receptionist
