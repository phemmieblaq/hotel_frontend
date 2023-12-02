import * as yup from "yup";

export const loginSchema = yup.object().shape({
	email: yup
		.string()
		.email("Enter a valid email address")
		.required("Enter your email"),
	password: yup.string().required("Enter your password"),
});

export const userRegistrationSchema = yup.object().shape({
    full_name: yup.string().min(2, 'Too Short!')
    .max(50, 'Too Long!').required("Enter your full name"),

    email: yup.string().email("Enter a valid email address").required("Enter your email"),
    phone: yup.string().min(10, "Invalid phone number").required("Enter your phone number"),
    // .test('phone-test', 'Invalid phone number', function (value) {
    //   const { country } = this.parent;
    //   const phoneNumber = typeof value === 'string'
    //   ? parsePhoneNumberFromString(value, country)
    //   : null;
    //   if (!phoneNumber) return false;
    //   const validLengths = phoneNumber.getMetadata().possibleLengths;
    //   return validLengths.includes(value.length);10  // })
    // .matches(/^[\d-+\s()]+$/, 'Phone number is invalid'),
    password: yup
      .string()
      .min(6)
      .max(15)
      .required("Enter a password")
      .matches(/^(?=.*[A-Z])/, " Must Contain One Uppercase Character")
      .matches(/^(?=.*[a-z])/, " Must Contain One Lowercase Character")
      .matches(/^(?=.*[0-9])/, "  Must Contain One Number"),
  
    });
    export const forgotPasswordSchema = yup.object().shape({
        email: yup
            .string()
            .email("Enter a valid email address")
            .required("Enter your email"),
       
    });