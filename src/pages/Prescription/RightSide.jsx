import React from "react";

import ImageInput from "../../Components/Properites/imageInput/ImageInput";
import Input from "../../Components/Properites/Inputs/Input";
import Select from "../../Components/Properites/Select/Select";

const RightSide = ({
  TranslateJson,
  values,
  handleChange,
  validationError,
  errors,
  gender,
  style,
  Options,
  base64Image,
  handleDeleteFile,
  setFieldValue,
  SelectGender
}) => {
  return (
    <>
      <div className="prescription-right-content">
        <h1 className="prescription-right-content-title">
          {TranslateJson.prescription.step1.title}
        </h1>

        <Input
          id="speciality"
          name="speciality"
          value={values.speciality}
          setValue={handleChange}
          err={validationError && errors.speciality}
          label={TranslateJson.prescription.step1.label.label1}
          placeholder={
            TranslateJson.prescription.step1.placeholder.placeholder_text1
          }
          length={25}

        />
        <Input
          id="phone_number"
          name="phone_number"
          value={values.phone_number}
          setValue={handleChange}
          err={validationError && errors.phone_number}
          label={TranslateJson.prescription.step1.label.label2}
          placeholder={
            TranslateJson.prescription.step1.placeholder.placeholder_text2
          }
          length={10}
        />
        <Input
          id="license_number"
          name="license_number"
          value={values.license_number}
          setValue={handleChange}
          err={validationError && errors.license_number}
          label={TranslateJson.prescription.step1.label.label3}
          placeholder={
            TranslateJson.prescription.step1.placeholder.placeholder_text3
          }
          length={15}

        />
      </div>
      <div className="prescription-right-content">
        <h1 className="prescription-right-content-title">
          {TranslateJson.prescription.step2.title}
        </h1>

        <Input
          id="patient_name"
          name="patient_name"
          value={values.patient_name}
          setValue={handleChange}
          err={validationError && errors.patient_name}
          label={TranslateJson.prescription.step2.label.label1}
          placeholder={
            TranslateJson.prescription.step2.placeholder.placeholder_text1
          }
        />
        <Input
          id="age"
          name="age"
          value={values.age}
          setValue={handleChange}
          err={validationError && errors.age}
          label={TranslateJson.prescription.step2.label.label2}
          length={3}
          placeholder={
            TranslateJson.prescription.step2.placeholder.placeholder_text2
          }
        />
        <div className=" relative mt-[12px] mb-[12px] flex flex-col gap-1">
          <label>{TranslateJson.prescription.step2.label.label3}</label>

          <Select
            SelectedValue={(e) => SelectGender(e)}
            value={gender}
            styles={style}
            options={Options}
            placeholder={
              TranslateJson.prescription.step2.placeholder.placeholder_text3
            }
          />
          {validationError && !gender && (
            <span className=" absolute bottom-10 left-0 err-txt ">
              Gender is required
            </span>
          )}
        </div>
        <Input
          id="patient_phone_number"
          name="patient_phone_number"
          value={values.patient_phone_number}
          setValue={handleChange}
          err={validationError && errors.patient_phone_number}
          label={TranslateJson.prescription.step2.label.label4}
          placeholder={
            TranslateJson.prescription.step2.placeholder.placeholder_text4
          }
          length={10}
        />
      </div>
      <div className="prescription-right-content">
        <h1 className="prescription-right-content-title">
          {TranslateJson.prescription.step3.title}
        </h1>

        <Input
          id="medicine_name"
          name="medicine_name"
          value={values.medicine_name}
          setValue={handleChange}
          err={validationError && errors.medicine_name}
          label={TranslateJson.prescription.step3.label.label1}
          placeholder={
            TranslateJson.prescription.step3.placeholder.placeholder_text1
          }
        />
        <Input
          id="dosage"
          name="dosage"
          value={values.dosage}
          setValue={handleChange}
          err={validationError && errors.dosage}
          label={TranslateJson.prescription.step3.label.label2}
          placeholder={
            TranslateJson.prescription.step3.placeholder.placeholder_text2
          }
        />
        <Input
          id="frequency"
          name="frequency"
          value={values.frequency}
          setValue={handleChange}
          err={validationError && errors.frequency}
          label={TranslateJson.prescription.step3.label.label3}
          placeholder={
            TranslateJson.prescription.step3.placeholder.placeholder_text3
          }
        />
        <Input
          id="duration"
          name="duration"
          value={values.duration}
          setValue={handleChange}
          err={validationError && errors.duration}
          label={TranslateJson.prescription.step3.label.label4}
          placeholder={
            TranslateJson.prescription.step3.placeholder.placeholder_text4
          }
        />
        <Input
          id="instruction"
          name="instruction"
          value={values.instruction}
          setValue={handleChange}
          err={validationError && errors.instruction}
          label={TranslateJson.prescription.step3.label.label5}
          placeholder={
            TranslateJson.prescription.step3.placeholder.placeholder_text5
          }
        />
      </div>
      <div className="prescription-right-content">
        <h1 className="prescription-right-content-title">
          {TranslateJson.prescription.step4.title}
        </h1>
        <Input
          id="diagnosis"
          name="diagnosis"
          value={values.diagnosis}
          setValue={handleChange}
          err={validationError && errors.diagnosis}
          label={TranslateJson.prescription.step4.label.label1}
          placeholder={
            TranslateJson.prescription.step4.placeholder.placeholder_text1
          }
        />
        <div>
          <div className=" relative w-full">
            <h1 className="prescription-right-content-inside-title">
              {TranslateJson.prescription.step4.label.label2}
            </h1>

            <ImageInput
              base64Image={base64Image}
              file={values.file}
              handleDeleteFile={handleDeleteFile}
              setFieldValue={setFieldValue}
            />
            {validationError && errors.file && (
              <span className=" absolute top-[98%] left-0 err-txt ">
                {errors.file}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSide;
