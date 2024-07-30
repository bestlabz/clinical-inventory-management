import * as yup from "yup";

const isImageFile = (value) => {
  if (value && typeof value === "object") {
    const fileType = value.type.split("/")[0];
    return fileType === "image";
  }
  return true;
};

const isURL = (value) => {
  if (typeof value === "string") {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(value);
  }
  return false;
};

export const ProfileDetails = yup.object().shape({
  name: yup.string("Please enter your name").required("Name is required"),
  clinic_name: yup
    .string("Please enter your clinic name")
    .required("Clinic name is required"),
  email: yup
    .string("Please enter your email address")
    .email("Enter valid email address")
    .required("Email address is required"),
  mobile_number: yup
    .string("Please enter your phone number")
    .matches(/^[0-9]{10}$/, "Enter a valid phone number")
    .required("Mobile number is required"),
  profile: yup
    .mixed()
    .nullable()
    .required("Profile is required")
    .test("fileFormat", "Only image files or URLs are allowed", (value) => {
      return isImageFile(value) || isURL(value);
    })
    .test("fileSize", "File size must be less than 5MB", (value) => {
      if (typeof value === "object" && value) {
        return value.size <= 5242880;
      }
      return true;
    }),
});
