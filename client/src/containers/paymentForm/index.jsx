import React from 'react'
import InputWithLabel from '../../components/input/inputWithLabel'
import AuthLayout from '../layouts/auth'
import Button from '../../components/button'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { paymentSchema } from './paymentSchema'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PaymentForm = () => {
  // Make a POST to get the price of the bookig
  let navigate = useNavigate();
  const get_price = async () => {
    try {
      const response = await axios.post('http://localhost:3001/payment/price');
      console.log(response)

    }
    catch (error) {
      console.error(error)
    }
  }

  let rrr = get_price
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
navigate('/payment-confirmation')
    
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
