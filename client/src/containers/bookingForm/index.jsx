import React, { useEffect, useState } from 'react'
import AuthLayout from '../layouts/auth'
import InputWithLabel from '../../components/input/inputWithLabel'
import Button from '../../components/button'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import DropDownInput from '../../components/input/dropDownInput'
import { bookingSchema } from './bookingSchema'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const BookingForm = () => {
  const [userData, setUserData] = useState(null);
  const [bookingData, setBookingData] = useState(null);
  const [getRoomType, setGetRoomType] = useState('');

  let navigate = useNavigate()


  const [dateFrom, setdateFrom] = useState("");
  const [dateTo, setdateTo] = useState("");

  // console.log(dateTo)
  const handleDateFrom = (e) => {
    const value = e.target.value;
    setdateFrom(value);
    setValue("checkInDate", value, { shouldValidate: true });
  };

  const handleDateTo = (e) => {
    const value = e.target.value;
    setdateTo(value);
    setValue("checkOutDate", value, { shouldValidate: true });

  };

  const {handleSubmit, register, setValue, formState: { errors }} = useForm({resolver: yupResolver(bookingSchema)});


  const options = ['Standard Double', 'Standard Twin', 'Superior Double', 'Superior Twin'];

  const secondDropdownData = React.useMemo(() => ({
    'Standard Double': 62,
    'Standard Twin': 65,
    'Superior Double': 77,
    'Superior Twin': 75,
  }), []);
  const RealBackendRoomtype = {
    'Standard Double': 'std_d',
    'Standard Twin': 'std_t',
    'Superior Double': 'sup_d',
    'Superior Twin': 'sup_t',
  }


  const handleGuestChange = (value) => {

    setValue("roomTypes", value, { shouldValidate: true });
    setGetRoomType(value)

  };
  useEffect(() => {
    // Retrieve data from localStorage
    const storedData = localStorage.getItem("userInfo");


    // Parse the stored data if it exists
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUserData(parsedData);
    }

  }, []);

  console.log(bookingData)
  // console.log(userData);
  const apiUrl = 'http://localhost:3001/booking';
  // Populates the email to help the user 
  useEffect(() => {
    if (userData?.logged_in) {
      setValue("email", userData?.email);

    }
    setValue("cost", secondDropdownData[getRoomType]);
  }, [getRoomType, secondDropdownData, setValue, userData?.email, userData?.logged_in]);

  const submitForm = async (formData) => {

    const postData = {
      "email": formData?.email,
      "cost": formData?.cost,
      "outstanding": formData?.cost,
      "notes": "",
      "type": RealBackendRoomtype[formData?.roomTypes],
      "check_in": formData?.checkInDate,
      "check_out": formData?.checkOutDate
    }
    console.log(postData);

    //Make a POST request using Axios
    try {
      const response = await axios.post(apiUrl, postData);
      if (response.data.status_code === 200) {
        toast.success(response.data.message)
        localStorage.setItem("bookingInfo", JSON.stringify(response.data));
        navigate('/booking-confirmation')
      }
      else {
        toast.error('error 403')
      }
    } catch (error) {
      // Handle the error
      console.error('Error:', error.message);
    }
  }
  return (
    <div className='top_Wrapper'>
      <div className='mainAuthWrapper'>
        <AuthLayout heading='Booking' subHeading='Please provide the required information to book your accommodation'>
          <form onSubmit={handleSubmit(submitForm)}>
            <InputWithLabel
              label='Email'
              type='email'
              disable={true}
              name="email"
              register={register}
              errorMessage={errors.email?.message} />

            <InputWithLabel
              label='Check In'
              type='date'
              name="checkInDate"
              onChange={handleDateFrom}
              errorMessage={errors.checkInDate?.message} />

            <InputWithLabel
              label='Check Out'
              type='date'
              name="checkOutDate"
              onChange={handleDateTo}
              errorMessage={errors.checkOutDate?.message} />

            <DropDownInput
              Options={options}
              label="Room Types"
              name="roomTypes"
              initialValue='Select'
              setValue={handleGuestChange}
              errorMessage={errors.roomTypes?.message}/>

            <InputWithLabel
              label='Cost in pounds'
              type='number'
              disable={true}
              name="cost"
              register={register}
              errorMessage={errors.cost?.message} />

            <div className="signUpWrapper"><Button title='Book Now' /></div>
          </form>
        </AuthLayout>
      </div>
    </div>
  )
}

export default BookingForm
