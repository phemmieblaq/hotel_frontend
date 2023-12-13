import React from 'react'
import AnalyticCard from '../../components/cards/analyticCard'
import './style.css'
import StatusCard from '../../components/cards/statusCard'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Footer from '../../containers/footer';

const Receptionist = ({user}) => {
  // Defult State wit all room counts at 'Zero'
  const [analytics, setAnalytics] = useState([])

  // Bookings
  let [rooms, setRooms] = useState([])

  // Status card info's
  const addRoom = (roomInfo) => {
    // Create a new room
    const newRoom = {
      title: roomInfo.title || null,
      roomNumber: roomInfo.roomNumber || null,
      date: roomInfo.date || null,
      ref_no: roomInfo.ref_no || null,
      status: roomInfo.status || null
    };
    // console.log(newRoom)
  
    // Update the state by adding the new room to the existing array
    setRooms((prevRooms) => [...prevRooms, newRoom]);
  };
  

  // Format date string
  function formatDateString(inputDate) {
    const date = new Date(inputDate);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString('en-Uk', options);
  }

  const [cardTitle,setA] = useState('Booking')
  const clickFunction = (res) =>{
    setA(res)
  }

  // Fetch the updatated data fro the database
  let checkPrime = false
  const fetchAccommodationFromBackend = async () => {
    try {
      let response = await axios.get('http://localhost:3001/management')
      if(!checkPrime){

        setAnalytics([
          { title: 'Booking', number: response.data.bookings.no},
          { title: 'Available rooms', number: response.data.available.no},
          { title: 'Checked In', number: response.data.unavailable.no},
          { title: 'Checked out', number: response.data.checked_out.no}
        ]); 

        if (cardTitle === "Booking"){
          setRooms([])    //clear the rooms on the page rn
          for(let i = 0; i<response.data.bookings.no; i++){
            addRoom({
              title: response.data.bookings.room_type[i], 
              roomNumber: response.data.bookings.room_no[i], 
              status: response.data.bookings.room_status[i],
              date: formatDateString(response.data.bookings.check_in[i]),
              ref_no: response.data.bookings.booking_ref[i]
            })
          }
        }
        else if (cardTitle === "Available rooms"){
          setRooms([])    //clear the rooms on the page rn
          for(let i = 0; i<response.data.available.no; i++){
            addRoom({
              title: response.data.available.room_type[i], 
              roomNumber: response.data.available.room_no[i], 
              status: response.data.available.room_status[i],
              })
          }
        }
        else if (cardTitle === "Checked In"){
          setRooms([])    //clear the rooms on the page rn
          for(let i = 0; i<response.data.unavailable.no; i++){
            addRoom({
              title: response.data.unavailable.room_type[i], 
              roomNumber: response.data.unavailable.room_no[i], 
              status: response.data.unavailable.room_status[i],
              ref_no: response.data.unavailable.booking_ref[i]
              })
          }
        }
        else if (cardTitle === "Checked out"){
          setRooms([])    //clear the rooms on the page rn
          for(let i = 0; i<response.data.checked_out.no; i++){
            
            addRoom({
              title: response.data.checked_out.room_type[i], 
              roomNumber: response.data.checked_out.room_no[i], 
              status: response.data.checked_out.room_status[i],
              })
          }
        }
        checkPrime = true
      }
      

    } catch (error) {
      console.error('Error fetching data from backend:', error);
    }
  };
  useEffect(() => {
    fetchAccommodationFromBackend()
  }, [cardTitle]);


  return (
    <div className='main-container'>
      <div className="statusWrapper">
        {analytics?.map((el, index) => (
          <AnalyticCard key={index} title={el?.title} number={el?.number} clickFun={clickFunction}/>
        ))}

      </div>
      <div className="statusCardContainer">
        <div className="filterflex">
          <p className="rightTitle">{cardTitle}</p>
          {/* {dropdown} */}
        </div>
        <div className="cardMap">
          {rooms.map((el, index) => {
            // console.log(el)
            return <StatusCard key={index} roomNum={el.roomNumber} roomType={el.title} date={el.date} ref_no={el.ref_no} user={user} status={el.status}/>
          })}
        </div>

      </div>
    </div>
  )
}

export default Receptionist