import * as yup from "yup";

export const AddMedicineSchema = yup.object().shape({
  medicine_name: yup
    .string("Please enter your medicine name")
    .required("Medicine name is required"),

  dasage_form: yup
    .string("Please enter your dasage form")
    .required("Dasage form is required"),

  dasage_strength: yup
    .string("Please enter your dasage strength")
    .required("Dasage strength is required"),
});
