import * as yup from "yup";

export const bookingSchema = yup.object().shape({
    
    email: yup.string().email("Enter a valid email address").required("Enter your email"),
    checkInDate: yup.string().required ("kindly pick your check in date"),
    checkOutDate: yup.string().required ("kindly pick your check out date"),
 
  
    roomTypes: yup.string().required("pick the choice of your rooms "),
    cost: yup.number(),
  });