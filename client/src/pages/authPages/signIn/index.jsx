import React from 'react'
import AuthLayout from '../../../containers/layouts/auth'
import InputWithLabel from '../../../components/input/inputWithLabel'
import Button from '../../../components/button'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from '../authSchema';
import '../style.css'
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  let navigate =useNavigate();

  const signUpNavigation = ()=>{
      navigate('/signup')
  }
  

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
      heading='Welcome back'
      subHeading='Provide the required information to access your account'
      >
        <form onSubmit={handleSubmit(submitForm)}>
        <InputWithLabel
        label='Email'
        type='email'
                name="email"
                register={register}
                errorMessage={errors.email?.message}/>
      
        
         <InputWithLabel
        label='Password'
        type='password'
       
                name="password"
                register={register}
                errorMessage={errors.password?.message}/>
         <div className="signUpWrapper">
            <Button
      title ='Sign in '
     />
     
      </div>

    </form>
    
      <p className='bottomText'>
      Don’t have an account? <span onClick={signUpNavigation}>Create an account</span> 
      </p>

      
      </AuthLayout>
      </div>
    </div>
    </>
    </div>
  )
}

export default SignIn
