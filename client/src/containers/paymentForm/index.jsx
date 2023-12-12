import React from 'react'
import InputWithLabel from '../../components/input/inputWithLabel'
import AuthLayout from '../layouts/auth'
import Button from '../../components/button'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { paymentSchema } from './paymentSchema'
import axios from 'axios'

const PaymentForm = () => {
  const storedPrice = localStorage.getItem("price")
  // console.log(storedPrice)
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(paymentSchema),
  });

  const submitForm = async (formData) => {

    const postData = {
      "user_email": formData.email,
      "card_name": formData.cardName,
      "card_number": formData.cardNumber,
      "card_type": formData.cvv,
      "exp": formData.expiryDate
  }
    // Make a POST request using Axios
    try {
      const response = await axios.post("apiUrl", postData);
      console.log('Response:', response.data);

      localStorage.setItem("userInfo", JSON.stringify(response.data));



    } catch (error) {
      // Handle the error
      console.error('Error:', error.message);

    }

    // localStorage.setItem("userEmail", formData.email);
  }
  return (
        <div className='top_Wrapper'>
          <div className='mainAuthWrapper'>
            <AuthLayout heading='Payment' subHeading='Complete and secure your accommodation booking with payment.'>
              <form onSubmit={handleSubmit(submitForm)}>
                <InputWithLabel
                  label='Name on card'
                  type='text'
                  name="cardName"
                  register={register}
                  errorMessage={errors.cardName?.message} />

                <InputWithLabel
                  label='Card number'
                  type='number'
                  name="cardNumber"
                  register={register}
                  errorMessage={errors.cardNumber?.message} />

                <div className="splitDetails">
                  <InputWithLabel
                    label='CVV'
                    type='number'
                    name="cvv"
                    register={register}
                    errorMessage={errors.cvv?.message} />

                  <InputWithLabel
                    label='Expiry date (MM/YY)'
                    type='text'

                    name="expiryDate"
                    register={register}
                    errorMessage={errors.expiryDate?.message} />
                </div>

                <div className="signUpWrapper">
                  <Button title={storedPrice}/>
                </div>
              </form>
            </AuthLayout>
          </div>
        </div>
  )
}

export default PaymentForm
