import React from 'react'
import InputWithLabel from '../../components/input/inputWithLabel'
import AuthLayout from '../layouts/auth'
import Button from '../../components/button'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../../pages/authPages/authSchema'

const PaymentForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(loginSchema),
      });
    
      const submitForm =(data)=>{
        console.log(data);
      }
  return (
    <div>
      <>
    <div className='top_Wrapper'>
      <div className='mainAuthWrapper'>
      <AuthLayout
      heading='Payment'
      subHeading='Complete and secure your accommodation booking with payment.'
      >
        <form onSubmit={handleSubmit(submitForm)}>
        <InputWithLabel
        label='Card number'
        type='number'
                name="cardNumber"
                register={register}
                errorMessage={errors.email?.message}/>
      
        
         <InputWithLabel
        label='Name on card'
        type='text'
       
                name="cardName"
                register={register}
                errorMessage={errors.password?.message}/>

                <div className="splitDetails">
                <InputWithLabel
        label='CVV'
        type='text'
       
                name="cardName"
                register={register}
                errorMessage={errors.password?.message}/>
 <InputWithLabel
        label='Expiry date (MM/YY)'
        type='date'
       
                name="cardDate"
                register={register}
                errorMessage={errors.password?.message}/>

                </div>
              
            
         <div className="signUpWrapper">
            <Button
      title ='Book now '
     />
     
      </div>

    </form>
    
      
      </AuthLayout>
      </div>
    </div>
    </>
    </div>
  )
}

export default PaymentForm
