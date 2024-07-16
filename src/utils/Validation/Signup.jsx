import * as yup from "yup";

export const SignupPhoneNumber = yup.object().shape({
  phone_number: yup
    .string("Please enter your phone number")
    .matches(/^[0-9]{10}$/, "Enter a valid phone number")
    .required("Phone number is required"),
});


export const SignupDetails = yup.object().shape({
    name: yup
      .string("Please enter your name")
      .required("Name is required"),
      clinic_name: yup
      .string("Please enter your clinic name")
      .required("Clinic name is required"),
      email: yup
      .string("Please enter your email address")
      .email("Enter valid email address")
      .required("Email address is required"),
  });
  

export const SignupImage = yup.object().shape({
  files: yup
    .array()
    .of(
      yup
        .mixed()
        .nullable()
        .required("Document is required")
        .test("fileFormat", "Only image or PDF files are allowed", (value) => {
          if (value) {
            const fileType = value.type.split("/")[0];
            return fileType === "image" || value.type === "application/pdf";
          }
          return true;
        })
        .test("fileSize", "File size must be less than 5MB", (value) => {
          if (value) {
            return value.size <= 5242880;
          }
          return true;
        })
    )
    .min(2, "At least two files are required")
    .max(3, "Three files only accecpt")
    .required("File upload is required"),
});