import React from 'react'
import AuthLayout from '../../../containers/layouts/auth'
import InputWithLabel from '../../../components/input/inputWithLabel'
import Button from '../../../components/button'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from '../authSchema';
import '../style.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { checkStaffEmail } from '../../../globalFunction';

const SignIn = () => {

  const [responseData, setResponseData] = useState({});



  // Define the API endpoint URL
  const apiUrl = 'http://localhost:3001/signin';



  let navigate = useNavigate();

  const signUpNavigation = () => {
    navigate('/signup')
    // toast.success('Sign Up Success');
  }


  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submitForm = async (formData) => {
    console.log(formData)
    const postData = {
      "email": formData?.email,
      "password": formData?.password
    }

    let staffCheck = checkStaffEmail(formData.email);
    // Make a POST request using Axios
    try {
      const response = await axios.post(apiUrl, postData);
      console.log('Response:', response.data);

      localStorage.setItem("userInfo", JSON.stringify(response.data));
      if (response.data.status_code === 200) {
        toast.success('login successfully');
        staffCheck
          ? navigate("/admin")
          : navigate("/");
          window.location.reload();
      }
      else if(response.data.status_code === 404){
        toast.error('No Account associated with this email');
      }
      else {
        toast.error('check your login details');
      }

    } catch (error) {
      // Handle the error
      console.error('Error:', error.message);

    }


    // localStorage.setItem("userEmail", formData.email);
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
                  errorMessage={errors.email?.message} />


                <InputWithLabel
                  label='Password'
                  type='password'

                  name="password"
                  register={register}
                  errorMessage={errors.password?.message} />
                <div className="signUpWrapper">
                  <Button
                    title='Sign in '
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
