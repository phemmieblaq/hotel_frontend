import React from 'react'
import tick from '../../assets/svg/tick.svg'

const PaymentConfirmation = () => {
  return (
    <div>
      <div className='mainBookingWrapper'>
      <div className="bookWrapper">
        <div className="tickWrapper">
          <img src={tick} alt="tick" />
        </div>
        <p className="mainHeading"> Payment confirmed</p>
        <p className="bookingContent">
        Thank you for your payment! We appreciate your promptness and commitment to fulfilling your financial obligations. Your payment has been successfully processed, and your account is now up to date.

Your continued support allows us to maintain and improve the quality of our products/services. We value your trust in us and look forward to serving you in the future.

If you have any questions or need further assistance, please feel free to contact our customer support team. Once again, thank you for choosing us.

        </p>
        </div>
        </div>
    </div>
  )
}

export default PaymentConfirmation
