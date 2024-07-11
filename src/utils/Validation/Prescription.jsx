import * as yup from "yup";

//Translate
import TranslateJson from "../../utils/translation/en.json";


export const ClinicDetailsSchema = yup.object().shape({
  clinic_name: yup
    .string("Please enter your clinic_name")
    .required("Clinic name is required"),
  contact_number: yup
    .string("Please enter contact_number")
    .matches(/^[0-9]{10}$/, "Enter a valid phone number")
    .required("Contact number is required"),
  address: yup.string("Please enter address").required("Address is required"),
  gst_no: yup.string("Please enter gst_no").required("GST no is required"),
});

export const DoctorDetailsSchema = yup.object().shape({
  doctor_name: yup
    .string("Please enter your clinic_name")
    .required("Clinic name is required"),
  speciality: yup
    .string("Please enter address")
    .required("Address is required"),
  degree: yup.string("Please enter address").required("Address is required"),

  work: yup.string("Please enter gst_no").required("GST no is required"),
});
