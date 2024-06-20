import * as yup from "yup";

//Translate
import TranslateJson from "../../utils/translation/en.json";

export const PrescriptionSchema = yup.object().shape({
  speciality: yup
    .string("Please enter your speciality")
    .required(TranslateJson.prescription.step1.errors.error1),
  phone_number: yup
    .string("Please enter your phone number")
    .matches(/^[0-9]{10}$/, "Enter a valid phone number")
    .required(TranslateJson.prescription.step1.errors.error2),
  license_number: yup
    .string("Please enter your license number")
    .required(TranslateJson.prescription.step1.errors.error3),
  patient_name: yup
    .string("Please enter your patient name")
    .required(TranslateJson.prescription.step2.errors.error1),
  age: yup
    .string("Please enter your age")
    .matches(/^[0-9]{10}$/, "Enter a valid age")
    .required(TranslateJson.prescription.step2.errors.error2),
  patient_phone_number: yup
    .string("Please enter your phone number")
    .matches(/^[0-9]{10}$/, "Enter a valid phone number")
    .required(TranslateJson.prescription.step2.errors.error3),

  medicine_name: yup
    .string("Please enter your medicine name")
    .required(TranslateJson.prescription.step3.errors.error1),
  dosage: yup
    .string("Please enter your dosage")
    .required(TranslateJson.prescription.step3.errors.error2),
  frequency: yup
    .string("Please enter your frequency")
    .required(TranslateJson.prescription.step3.errors.error3),
  duration: yup
    .string("Please enter your duration")
    .required(TranslateJson.prescription.step3.errors.error4),
  instruction: yup
    .string("Please enter your instruction")
    .required(TranslateJson.prescription.step3.errors.error5),
  diagnosis: yup
    .string("Please enter your diagnosis")
    .required(TranslateJson.prescription.step3.errors.error1),
  file: yup
    .mixed()
    .nullable()
    .test("fileFormat", "Only image files are allowed", (value) => {
      if (value) {
        const fileType = value.type.split("/")[0];
        return fileType === "image";
      }
      return true;
    })
    .test("fileSize", "File size must be less than 5MB", (value) => {
      if (value) {
        return value.size <= 5242880;
      }
      return true;
    }),
});
