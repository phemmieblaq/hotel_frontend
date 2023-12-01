import React, { useState } from 'react'
import AuthLayout from '../layouts/auth'
import InputWithLabel from '../../components/input/inputWithLabel'
import Button from '../../components/button'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { loginSchema } from '../../pages/authPages/authSchema'
import NumberInput from '../../components/input/phoneNumberInput'
import DropDownInput from '../../components/input/dropDownInput'
import { bookingSchema } from './bookingSchema'

const BookingForm = () => {

    const [dateFrom, setdateFrom] = useState("");
  const [dateTo, setdateTo] = useState("");
  console.log(dateTo)
  const handleDateFrom = (e) => {
    const value = e.target.value;
    setdateFrom(value);
    setValue("checkInDate", dateFrom, { shouldValidate: true });
  };

  const handleDateTo = (e) => {
    const value = e.target.value;
    setdateTo(value);
    setValue("checkOutDate", dateTo, { shouldValidate: true });

  };
    const {
        handleSubmit,
        register,
        setValue,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(bookingSchema),
      });

      const handleNumberChange = (value) => {
        setValue("phone", value, { shouldValidate: true });
      };
    const options =['Standard Double', 'Standard Twin', 'Superior Double', 'Superior Twin']
    const handleGuestChange = (value) => {
        setValue("Number", value, { shouldValidate: true });
      };
    
      const submitForm =(data)=>{
        console.log(data);
      }
  return (
    <div className='top_Wrapper'>
      <div className='mainAuthWrapper'>
      <AuthLayout
      heading='Booking'
      subHeading='Please provide the required information to book your accommodation'
      >
        <form onSubmit={handleSubmit(submitForm)}>
        <InputWithLabel
        label='Email'
        type='email'
                name="email"
                register={register}
                errorMessage={errors.email?.message}/>


        
      <InputWithLabel
        label='Check In'
        type='date'
        name="checkInDate"
        onChange={handleDateFrom}
               
                errorMessage={errors.checkInDate?.message}/>

<InputWithLabel
        label='Check Out'
        type='date'
        name="checkOutDate"
        onChange={handleDateTo}
             
                errorMessage={errors.checkOutDate?.message}/>
                  {/* <NumberInput
        label='Phone number'
        name="phone"
                type="number"
                onChange={handleNumberChange}
                register={register}
                errorMessage={errors.phone?.message}/> */}
                <DropDownInput
                Options={options}
               
                
                
                label="Room Types"
                name="roomTypes"
                initialValue='select'
               
                errorMessage={errors.roomTypes?.message}
                handleReferralChange={handleGuestChange}
              />
              
         <div className="signUpWrapper">
            <Button
      title ='Book Now'
     />
     
      </div>

    </form>
    
      
      
      </AuthLayout>
      </div>
    </div>
  )
}

export default BookingForm
