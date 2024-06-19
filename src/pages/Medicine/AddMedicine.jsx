import React from "react";


//Translate
import Translate from '../../Components/translateSpan/TranslateSpan'
import TranslateJson from "../../utils/translation/en.json"

//Third party libraries
import { FaArrowLeft } from "react-icons/fa6";
import Input from "../../Components/Properites/Inputs/Input";

//Hooks
import Addmedicine from "../../hooks/Medicine/Addmedicine";
import ModelPopup from "../../Components/Properites/ModelPopup/ModelPopup";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import ResponsiveSuccessmodal from "../../Components/Properites/ResponsiveSuccessmodal/ResponsiveSuccessmodal";

const AddMedicine = () => {
  const {
    errors,
    goBack,
    handleChange,
    handleSubmit,
    values,
    handelClick,
    validateErr,
    modalPopup,
  } = Addmedicine();

  return (
    <div className=" w-full h-full pt-0 p-3 overflow-auto">
      <div
        style={{
          boxShadow:
            "0 5px 5px -8px rgba(0, 0, 0, .9), 0 2px 8px -3px rgba(0, 0, 0, .6)",
        }}
        className="add-medicine-top"
      >
        <FaArrowLeft className=" cursor-pointer" size={20} onClick={goBack} />
        <p className="add-medicine-top-text">Add Medicine</p>
      </div>

      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="add-medicine-body">
          <div className="add-medicine-body-content">
            <label>{TranslateJson.add_medicine.label.name}</label>
            <Input
              placeholder={TranslateJson.add_medicine.placeholder.name}
              id="medicine_name"
              name="medicine_name"
              setValue={handleChange}
              value={values.medicine_name}
              err={validateErr && errors.medicine_name}
            />
          </div>
          <div className="add-medicine-body-content">
            <label>{TranslateJson.add_medicine.label.dasage_form}</label>
            <Input
              placeholder={TranslateJson.add_medicine.placeholder.dasage_form}
              id="dasage_form"
              name="dasage_form"
              setValue={handleChange}
              value={values.dasage_form}
              err={validateErr && errors.dasage_form}
            />
          </div>
          <div className="add-medicine-body-content">
            <label>{TranslateJson.add_medicine.label.dasage_strength}</label>
            <Input
              placeholder={TranslateJson.add_medicine.placeholder.dasage_strength}
              id="dasage_strength"
              name="dasage_strength"
              setValue={handleChange}
              value={values.dasage_strength}
              err={validateErr && errors.dasage_strength}
            />
          </div>
        </div>

        <div className="add-medicine-footer">
          <button
            type="submit"
            className="add-medicine-footer-button"
            onClick={handelClick}
          >
            {TranslateJson.add_medicine.button}
          </button>
        </div>
      </form>

      {modalPopup && (
        <ResponsiveSuccessmodal modalPopup={modalPopup} />
      )}
    </div>
  );
};

export default AddMedicine;
