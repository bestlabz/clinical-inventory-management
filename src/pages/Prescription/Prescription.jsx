import React from "react";

//Assets
import Img from "../../assets/PreviewImage.png";
import Signature from "../../assets/signature.png";
import Image1 from "../../assets/image1.png";

//Translate
import TranslateJson from "../../utils/translation/en.json";

//Third party libraries
import { FaArrowLeft } from "react-icons/fa6";

//Components
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";

//Hooks
import PrescriptionFunction from "../../hooks/Prescription/Prescription";

const Prescription = () => {
  const {
    goBack,
    validationCheck,
    validationError,
    addDynamicFeild,
    headerLoader,
    mainLoader,
    removeDynamicFeild,
    setReFetch
  } = PrescriptionFunction();
  return (
    <div className="prescription-container">
      <div className="prescription-right-container">
        <div
          style={{
            boxShadow:
              "0 5px 5px -8px rgba(0, 0, 0, .9), 0 2px 8px -3px rgba(0, 0, 0, .6)",
          }}
          className="add-prescription-top"
        >
          <FaArrowLeft className=" cursor-pointer" size={20} onClick={goBack} />
          <p className="add-medicine-top-text">
            {TranslateJson.prescription.navigate_content}
          </p>
        </div>

        <div className="prescription-right">
          <RightSide
            validationError={validationError}
            addDynamicFeild={addDynamicFeild}
            headerLoader={headerLoader}
            mainLoader={mainLoader}
            removeDynamicFeild={removeDynamicFeild}
            setReFetch={setReFetch}
          />
        </div>
      </div>

      <div className="prescription-left bg-gray-100">
        <LeftSide
        />
      </div>
    </div>
  );
};

export default Prescription;
