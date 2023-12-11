import React from 'react';
import './style.css';
import DropDownInput from '../../input/dropDownInput';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';

const StatusCard = ({ roomNum, roomType, date, ref_no, user, status}) => {
  const [options, setOptions] = useState(['--Select--', 'Check In']); // State to manage options dynamically

  const handleSelect = (user, status) => {
    // Define a mapping or lookup object for options
    const optionsMap = {
      'Reception': {
        'X': ['--Select--', 'Check In'],
        'A': ['--Select--'],
        'O': ['--Select--', 'Check Out'],
        'C': ['--Select--'],
      },
      'Housekeeper': {
        'X': ['--Select--'],
        'A': ['--Select--'],
        'O': ['--Select--'],
        'C': ['--Select--', 'Cleaned'],
      },
    };
  
    // Get options based on user and status
    const selectedOptions = optionsMap[user]?.[status] || ['--Select--'];
  
    // Update the state with the selected options
    setOptions(selectedOptions);
  };
  

  useEffect(() => { 
    handleSelect(user, status);
  }, [user, status]); // Run this effect whenever user or status changes
  



  // Function to handle dropdown selection
  const handleDropdownSelect = async (selectedOption) => {
    if (selectedOption === 'Check In') {
      try {
        const response = await axios.post('http://localhost:3001/management/reception/check_in', {
          r_no: roomNum,
        });

        // Handle the response as needed
        console.log('Check-in response:', response.data);
        // Display a success message
        toast.success('Checked In!');   
      } catch (error) {
        console.error('Error making check-in request:', error);
      }
    }
    else if(selectedOption === 'Check Out'){
      try {
        const response = await axios.post('http://localhost:3001/management/reception/check_out', {
          r_no: roomNum,
        });

        // Handle the response as needed
        console.log('Check-Out response:', response.data);
        // Display a success message
        toast.success('Checked out!');   
      } catch (error) {
        console.error('Error making check-in request:', error);
      }
    }
    else if(selectedOption === 'Cleaned'){
      try {
        const response = await axios.post('http://localhost:3001/management/housekeeping/cleaned', {
          r_no: roomNum,
        });

        // Handle the response as needed
        console.log('Check-Out response:', response.data);
        // Display a success message
        toast.success('Checked out!');   
      } catch (error) {
        console.error('Error making check-in request:', error);
      }
    }
  };

  return (
    <div className="mainCardWrappers">
        <h1> Room {roomNum}/ {roomType}</h1>
        <h2> {ref_no ? `Ref Number: ${ref_no}` : null}</h2>
        <h2> {date ? `Date: ${date}` : null}</h2>
        <div>
          <DropDownInput options={options} onSelect={handleDropdownSelect} />
        </div>
    </div>
  );
};

export default StatusCard;