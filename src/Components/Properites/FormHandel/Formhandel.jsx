import { useFormik } from "formik";

const Formhandel = ({
  initialValue,
  schema,
  submitFunction
}) => {

  const {
    handleBlur,
    handleChange,
    values,
    handleSubmit,
    touched,
    isSubmitting,
    errors,
    setFieldValue,
    setValues

  } = useFormik({
    initialValues: initialValue,
    validationSchema: schema,
    onSubmit: submitFunction,
  });

  return {
    handleBlur,
    handleChange,
    values,
    handleSubmit,
    touched,
    isSubmitting,
    errors,
    setFieldValue,
    setValues
  };
};

export default Formhandel;
