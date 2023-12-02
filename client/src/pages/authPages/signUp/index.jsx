import React from 'react'
import AuthLayout from '../../../containers/layouts/auth'
import InputWithLabel from '../../../components/input/inputWithLabel'
import NumberInput from '../../../components/input/phoneNumberInput'
import '../style.css'
import Button from '../../../components/button'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userRegistrationSchema } from '../authSchema';
import { useNavigate } from 'react-router-dom'
import Drawer from '../../../containers/drawer'

const SignUp = () => {
  let navigate =useNavigate();

  const signInNavigation = ()=>{
      navigate('/signin')
  }
  

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userRegistrationSchema),
  });
  const handleNumberChange = (value) => {
    setValue("phone", value, { shouldValidate: true });
  };

  const submitForm =(data)=>{
    console.log(data);
  }

  return (
    <>
    <div className='top_Wrapper'>
      <div className='mainAuthWrapper'>
      <AuthLayout
      heading='Create an account'
      subHeading='Provide the required information to create an account'
      >
     
        <form onSubmit={handleSubmit(submitForm)}>
        <InputWithLabel
        label='Full name'
        type='text'
        name="full_name"
                register={register}
                errorMessage={errors.full_name?.message}/>
        <InputWithLabel
        label='Email'
        type='email'
       
                name="email"
                register={register}
                errorMessage={errors.email?.message}/>
        <NumberInput
        label='Phone number'
        name="phone"
                type="number"
                onChange={handleNumberChange}
                register={register}
                errorMessage={errors.phone?.message}/>
         <InputWithLabel
        label='Password'
        type='password'
        name="password"
                register={register}
                errorMessage={errors.password?.message}/>
         <div className="signUpWrapper">
            <Button
      title ='Sign up '
      type="submit"
     />

      </div>
      </form>
      <p className='bottomText'>
      Already have an account? <span onClick={signInNavigation}>Sign In</span> 
      </p>
      
      </AuthLayout>
      </div>
    </div>
    </>
  )
}

export default SignUp
