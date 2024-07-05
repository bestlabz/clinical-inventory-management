import dayjs from "dayjs";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { useSelector } from "react-redux";

const LeftSide = ({
  values,
  Img,
  TranslateJson,
  Image1,
  Signature,
  gender,
  base64Image,
}) => {
  const {
    clinicLogo,
    clinicDetails,
    doctorDetails,
    headerDetails,
    mainDetails,
  } = useSelector((state) => state.PrescriptionDetails);

  return (
    <>
      <h1 className="prescription-left-top ">Preview</h1>
      <div className="prescription-top-container flex items-start w-full px-3">
        <div className="prescription-top-container-left-side w-[50%] border-r-[3px] flex items-start space-x-2">
          <div className="felx flex-col space-y-2 w-[40%] pt-1">
            <div className="w-[90px] h-[90px] mx-auto rounded-full border-[3px] border-green_light "></div>
            <p className="text-center font-semibold py-2  break-words">
              {clinicLogo.title}
            </p>
          </div>
          <div className="w-full">
            <p
              style={{
                color: clinicDetails.name.color,
                fontSize: clinicDetails.name.size,
                fontWeight: clinicDetails.name.weight,
                fontFamily: clinicDetails.name.font,
              }}
              className="text-[18px] font-semibold"
            >
              {clinicDetails.name.value}
            </p>
            <p
              style={{
                color: clinicDetails.address.color,
                fontSize: clinicDetails.address.size,
                fontWeight: clinicDetails.address.weight,
                fontFamily: clinicDetails.address.font,
              }}
              className="text-[14px] py-1 break-words text-secondary_text"
            >
              {clinicDetails.address.value}
            </p>
            <p
              style={{
                color: clinicDetails.contact_number.color,
                fontSize: clinicDetails.contact_number.size,
                fontWeight: clinicDetails.contact_number.weight,
                fontFamily: clinicDetails.contact_number.font,
              }}
              className="text-[14px] pt-1 break-words text-secondary_text flex items-center gap-2"
            >
              <FiPhone size={14} /> {clinicDetails.contact_number.value}
            </p>
            <p
              style={{
                color: clinicDetails.gst_no.color,
                fontSize: clinicDetails.gst_no.size,
                fontWeight: clinicDetails.gst_no.weight,
                fontFamily: clinicDetails.gst_no.font,
              }}
              className="text-[14px] break-words text-secondary_text"
            >
              License No: {clinicDetails.gst_no.value}
            </p>
          </div>
        </div>

        <div className="prescription-top-container-right-side text-end  w-[50%]">
          <p
            style={{
              color: doctorDetails.doctor_name.color,
              fontSize: doctorDetails.doctor_name.size,
              fontWeight: doctorDetails.doctor_name.weight,
              fontFamily: doctorDetails.doctor_name.font,
            }}
          >
            {doctorDetails.doctor_name.value}{" "}
            <span
              style={{
                color: doctorDetails.degree.color,
                fontSize: doctorDetails.degree.size,
                fontWeight: doctorDetails.degree.weight,
                fontFamily: doctorDetails.degree.font,
              }}
            >
              {doctorDetails.degree.value}
            </span>
          </p>
          <p
            style={{
              color: doctorDetails.speciality.color,
              fontSize: doctorDetails.speciality.size,
              fontWeight: doctorDetails.speciality.weight,
              fontFamily: doctorDetails.speciality.font,
            }}
            className="text-[16px] font-semibold"
          >
            ({doctorDetails.speciality.value})
          </p>
          <p
            style={{
              color: doctorDetails.work.color,
              fontSize: doctorDetails.work.size,
              fontWeight: doctorDetails.work.weight,
              fontFamily: doctorDetails.work.font,
            }}
            className=" text-[14px] text-secondary_text"
          >
            {doctorDetails.work.value}
          </p>
        </div>
      </div>

      <div className="mt-3 py-3 border-t-[1px] border-b-[1px] border-gray-300 grid grid-cols-6">
        {headerDetails.map((i, index) => (
          <p
            style={{
              color: i.color,
              fontSize: i.size,
              fontWeight: i.weight,
              fontFamily: i.font,
            }}
            className={`${index === 0 ? "col-span-3" : "col-span-1"}`}
          >
            {i.title}:
          </p>
        ))}
      </div>

      <div className="w-full flex items-end justify-end my-3">
        <p
          style={{
            color: headerDetails?.[0]?.color,
            fontSize: headerDetails?.[0]?.size,
            fontWeight: headerDetails?.[0]?.weight,
            fontFamily: headerDetails?.[0]?.font,
          }}
          className="text-start   w-[25%] max-w-[40%]"
        >
          Date: 
        </p>
      </div>

      {mainDetails.map((i, index) => (
        <div key={index} className=" min-h-[150px] mt-3 flex flex-col gap-2">
          <p
            style={{
              color: i.color,
              fontSize: i.size,
              fontWeight: i.weight,
              fontFamily: i.font,
            }}
            className=""
          >
            {i.title}:
          </p>
          <p className="pl-1"></p>
        </div>
      ))}
    </>
  );
};

export default LeftSide;
