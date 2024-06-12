import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  phone_number: yup
    .string("Please enter your phone number")
    .matches(/^[0-9]{10}$/, "Enter a valid phone number")
    .required("Phone number is required"),
});
