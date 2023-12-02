import * as yup from "yup";

const validateCreditCardNumber = (value) => {
    const cleanedValue = value.replace(/\D/g, ''); // Remove non-numeric characters
  
    if (!/^\d+$/.test(cleanedValue)) {
      return false; // Not a valid numeric string
    }
  
    let sum = 0;
    let isAlternate = false;
  
    for (let i = cleanedValue.length - 1; i >= 0; i--) {
      let digit = parseInt(cleanedValue.charAt(i), 10);
  
      if (isAlternate) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
  
      sum += digit;
      isAlternate = !isAlternate;
    }
  
    return sum % 10 === 0;
  };
  

export const paymentSchema = yup.object().shape({
    cardName:yup.string().required('Enter the name on the card'),
    cardNumber: yup.string().test('is-valid-card', 'Invalid credit card number', validateCreditCardNumber).required('Card number is required'),
    expiryDate: yup.string().matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid expiry date').required('Expiry date is required').test('is-future-date', 'Card has expired', function (value) {
        if (!value) return false;
    
        const [expiryMonth, expiryYear] = value.split('/');
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear() % 100;
        const currentMonth = currentDate.getMonth() + 1;
    
        return parseInt(expiryYear, 10) > currentYear || (parseInt(expiryYear, 10) === currentYear && parseInt(expiryMonth, 10) >= currentMonth);
      }),
    cvv: yup.string().matches(/^\d{3}$/, 'Invalid CVV').required('CVV is required'),
  });