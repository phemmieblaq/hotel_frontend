import React from 'react'
import AuthLayout from '../layouts/auth'
import InputWithLabel from '../../components/input/inputWithLabel'
import Button from '../../components/button'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { loginSchema } from '../../pages/authPages/authSchema'
import NumberInput from '../../components/input/phoneNumberInput'

const BookingForm = () => {
    const {
        handleSubmit,
        register,
        setValue,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(loginSchema),
      });

      const handleNumberChange = (value) => {
        setValue("phone", value, { shouldValidate: true });
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
        label='Full name'
        type='text'
        name="full_name"
                register={register}
                errorMessage={errors.full_name?.message}/>
                  <NumberInput
        label='Phone number'
        name="phone"
                type="number"
                onChange={handleNumberChange}
                register={register}
                errorMessage={errors.phone?.message}/>
         <div className="signUpWrapper">
            <Button
      title ='Sign in '
     />
     
      </div>

    </form>
    
      
      
      </AuthLayout>
      </div>
    </div>
  )
}

export default BookingForm
