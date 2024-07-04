import React from "react";

//Translate
import Translate from "../../Components/translateSpan/TranslateSpan";
import TranslateJson from "../../utils/translation/en.json";

//Third party libraries
import { FaArrowLeft } from "react-icons/fa6";
import Input from "../../Components/Properites/Inputs/Input";
import Input1 from "../../Components/Properites/Inputs/Input1";

//Hooks
import Addmedicine from "../../hooks/Medicine/Addmedicine";
import ModelPopup from "../../Components/Properites/ModelPopup/ModelPopup";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import ResponsiveSuccessmodal from "../../Components/Properites/ResponsiveSuccessmodal/ResponsiveSuccessmodal";
import Select from "../../Components/Properites/Select/Select";
import { ClipLoader } from "react-spinners";

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
    dosageFormsOptions,
    dosageUnitOptions,
    style,
    style1,
    selectedItem,
    setSelectedItem,
    selectedItem1,
    setSelectedItem1,
    loader,
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
            <div className=" mt-[18px] relative">
              <Select
                styles={style}
                options={dosageFormsOptions}
                placeholder={TranslateJson.add_medicine.placeholder.dasage_form}
                SelectedValue={setSelectedItem}
                value={selectedItem}
              />
              {validateErr && selectedItem === null && (
                <span className="err-txt absolute mt-[1px]">
                  Required Dasage Form
                </span>
              )}
            </div>
          </div>
          <div className="add-medicine-body-content">
            <label>{TranslateJson.add_medicine.label.dasage_strength}</label>
            <div
              className={`flex items-end border-[1px] ${
                !validateErr ? "border-gray-300" : "border-red-500"
              } rounded-xl`}
            >
              <div className=" flex-1 items-center">
                <Input1
                  placeholder={
                    TranslateJson.add_medicine.placeholder.dasage_strength
                  }
                  id="dasage_strength"
                  name="dasage_strength"
                  errtop="140%"
                  setValue={(e) => {
                    if (!/^\d*$/.test(e.target.value)) {
                      return; // If not a digit, return without updating the state
                    }
                    handleChange(e);
                  }}
                  value={values.dasage_strength}
                  err={validateErr && errors.dasage_strength}
                />
              </div>
              <div className=" 2xl:w-[25%] xl:w-[25%] lg:w-[25%] md:w-[30%] sm:w-[30%] xs:w-[50%] mobile:w-[60%] xss:w-[50%]">
                <div className="relative">
                  <Select
                    styles={style1}
                    options={dosageUnitOptions}
                    placeholder={
                      TranslateJson.add_medicine.placeholder.dasage_unit
                    }
                    SelectedValue={setSelectedItem1}
                    value={selectedItem1}
                  />
                  {validateErr && selectedItem1 === null && (
                    <span className="err-txt absolute mt-[1px]">
                      Required Dasage Form
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="add-medicine-footer">
          {loader ? (
            <button
              type="submit"
              className="add-medicine-footer-button"
              onClick={handelClick}
            >
              <ClipLoader color="#fff" size={20} />
            </button>
          ) : (
            <button
              type="submit"
              className="add-medicine-footer-button"
              onClick={handelClick}
            >
              {TranslateJson.add_medicine.button}
            </button>
          )}
        </div>
      </form>

      {modalPopup && <ResponsiveSuccessmodal modalPopup={modalPopup} />}
    </div>
  );
};

export default AddMedicine;
