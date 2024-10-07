import React from 'react'
import AuthLayout from '../../../containers/layouts/auth'
import InputWithLabel from '../../../components/input/inputWithLabel'
import Button from '../../../components/button'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPasswordSchema } from '../authSchema';
import '../style.css'

const ForgotPassword = () => {


  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
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
      heading='Forgot your password'
      subHeading='Kindly enter the email address linked to your account.'
      >
        <form onSubmit={handleSubmit(submitForm)}>
        <InputWithLabel
        label='Email'
        type='email'
                name="email"
                register={register}
                errorMessage={errors.email?.message}/>
      
        
  
         <div className="signUpWrapper">
            <Button
      title ='Forgot Password'
     />
     
      </div>

    </form>
    
      <p className='bottomText'>
      Remember your password? <span>Sign In</span> 
      </p>

      
      </AuthLayout>
      </div>
    </div>
    </>
    </div>
  )
}

export default ForgotPassword
