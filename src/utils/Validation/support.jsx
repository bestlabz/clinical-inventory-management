import * as yup from "yup";

export const SupportSchema = yup.object().shape({
  name: yup.string("Please enter your name").required("Name is required"),
  email: yup
    .string("Please enter your email address")
    .email("Enter valid email address")
    .required("Email address is required"),
  mobile_number: yup
    .string("Please enter your phone number")
    .matches(/^[0-9]{10}$/, "Enter a valid phone number")
    .required("Mobile number is required"),    
    description: yup
    .string("Please enter your description")
    .required("Descritpion is required"),
});
