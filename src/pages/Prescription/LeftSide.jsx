import dayjs from "dayjs";
import React from "react";

const LeftSide = ({
  values,
  Img,
  TranslateJson,
  Image1,
  Signature,
  gender,
  base64Image
}) => {
  return (
    <>
      <h1 className="prescription-left-top ">Preview</h1>
      <div className="flex items-center justify-between pt-3 px-3 border-b-[2px] gap-3">
        <div className="flex flex-col gap-3 w-[40%]">
          <h1 className=" 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[16px] xs:text-[16px] mobile:text-[16px] xss:text-[16px] font-semibold">
            Mayo clinic
          </h1>
          <h1 className=" text-[12px]">Date:{dayjs().format("DD/MM/YYYY")}</h1>
        </div>
        <div className="  2xl:w-[20%] xl:w-[80px] lg:w-[80px] md:w-[80px] sm:w-[80px] xs:w-[60px] mobile:w-[60px] xss:w-[60px] 2xl:h-[20%] xl:h-[80px] lg:h-[80px] md:h-[80px] sm:h-[80px] xs:h-[60px] mobile:h-[60px] xss:h-[60px] flex items-center justify-center rounded-full overflow-hidden">
          <img src={Img} alt="" className=" h-[80%] w-[80%] object-contain" />
        </div>
        <div className="flex flex-col gap-2 items-end w-[40%]">
          <h1 className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] mobile:text-[12px] xss:text-[12px] font-semibold">
            Dr. George
          </h1>
          <h1 className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[10px] sm:text-[10px] xs:text-[10px] mobile:text-[10px] xss:text-[10px] -mt-2 whitespace-normal break-all ">
            {values.speciality}
          </h1>
          <h1 className="2xl:text-[10px] xl:text-[10px] lg:text-[10px] md:text-[8px] sm:text-[8px] xs:text-[8px] mobile:text-[8px] xss:text-[8px] text-gray-400 whitespace-normal break-all">
            License No: {values.license_number}
          </h1>
        </div>
      </div>
      <div className=" grid  p-3 pt-5 gap-6 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 mobile:grid-cols-1 xss:grid-cols-1">
        <h1 className=" prescription-preview-text">
          Name: {values.patient_name}
        </h1>
        <h1 className=" prescription-preview-text">
          {TranslateJson.prescription.step2.label.label2}: {values.age}
        </h1>
        <h1 className="prescription-preview-text">
          {TranslateJson.prescription.step2.label.label3}: {gender?.value || ""}
        </h1>
        <h1 className="prescription-preview-text">
          {TranslateJson.prescription.step2.label.label4}:{" "}
          {values.patient_phone_number}
        </h1>
      </div>
      <div>
        <h1 style={{ border: "0px" }} className="prescription-left-top">
          Prescription Details
        </h1>
        <div className=" grid  p-3 pt-5 gap-6 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 mobile:grid-cols-1 xss:grid-cols-1">
          <h1 className=" prescription-preview-text">
            {TranslateJson.prescription.step3.label.label1} :{" "}
            {values.medicine_name}
          </h1>
          <h1 className=" prescription-preview-text">
            {TranslateJson.prescription.step3.label.label2} : {values.dosage}
          </h1>
          <h1 className="prescription-preview-text">
            {TranslateJson.prescription.step3.label.label3} : {values.frequency}
          </h1>
          <h1 className="prescription-preview-text">
            {TranslateJson.prescription.step3.label.label4} : {values.duration}
          </h1>
          <h1 className="prescription-preview-text">
            Instruction : {values.instruction}
          </h1>
          <h1 className="prescription-preview-text">
            {TranslateJson.prescription.step4.label.label1} : {values.diagnosis}
          </h1>
        </div>
      </div>

      <div className="w-full h-full">
        <h1 style={{ border: "0px" }} className="prescription-left-top">
          Additional Notes
        </h1>
        <div className="w-full min-h-[200px] border-b-[2px] border-gray-300 relative">
          <div className="w-full h-[135px] overflow-auto">
            {
              base64Image &&
            <img src={base64Image} className="object-cover w-full" />
            }
          </div>

          <div className=" absolute bottom-1 right-3">
            <p className="text-[14px]">Doctor Signature</p>
            <div className="flex items-center justify-center py-1 my-1">
              <img src={Signature} className="object-contain" />
            </div>
          </div>
        </div>
        <div className=" text-[13px] pt-2 text-gray-400">
          <p>12, United States of America, Washington DC,</p>
          <p>+1 12343345233</p>
          <p>mayclinic@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default LeftSide;
