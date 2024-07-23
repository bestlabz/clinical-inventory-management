import dayjs from "dayjs";
import React, { useRef } from "react";
import { FiPhone } from "react-icons/fi";
import { useSelector } from "react-redux";

import ModelResponsive from "../../Components/Properites/ModelPopup/A4Preview";

import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

const LeftSide = ({ openPreview, setOpenPreview }) => {
  const {
    clinicLogo,
    clinicDetails,
    doctorDetails,
    headerDetails,
    mainDetails,
  } = useSelector((state) => state.PrescriptionDetails);

  const pdfExportComponent = useRef();

  const orderedDetails = [
    clinicDetails.find((detail) => detail?.name === "Clinic Name"),
    clinicDetails.find((detail) => detail?.name === "Address"),
    clinicDetails.find((detail) => detail?.name === "Contact Number"),
    clinicDetails.find((detail) => detail?.name === "GST No"),
  ];

  const doctorDetailsArray = [
    doctorDetails.find((detail) => detail?.name === "Doctor Name"),
    doctorDetails.find((detail) => detail?.name === "Degree"),
    doctorDetails.find((detail) => detail?.name === "Speciality"),
    doctorDetails.find((detail) => detail?.name === "Work"),
  ];

  const handelExport = (event) => {
    pdfExportComponent.current.save();
  };
  return (
    <div className=" overflow-auto">
      <div className=" flex items-center space-x-4">
        <h1 className="prescription-left-top">Preview</h1>
        <h1
          className="prescription-left-top-button w-[80px] h-[30px] flex items-center justify-center rounded-md text-white bg-primary_color cursor-pointer"
          onClick={() => setOpenPreview(true)}
        >
          View
        </h1>
        <h1
          className="prescription-left-top-button w-[110px] h-[30px] flex items-center justify-center rounded-md text-white bg-primary_color cursor-pointer"
          onClick={handelExport}
        >
          Download
        </h1>
      </div>

      <PDFExport ref={pdfExportComponent} paperSize="A4">
        <div className="prescription-top-container flex items-center w-full px-3">
          <div className="prescription-top-container-left-side w-[50%] border-r-[3px] flex items-center space-x-2">
            <div className="felx items-center flex-col space-y-2 w-[40%] pt-1">
              <div className="w-[70px] h-[70px] mx-auto rounded-full border-[3px] border-green_light overflow-hidden ">
                <img
                  src={clinicLogo?.logo}
                  className="w-full h-full object-fill"
                />
              </div>
              {/* <p className="text-center font-semibold py-2  break-words">
                {clinicLogo?.title}
              </p> */}
            </div>
            <div className="w-full">
              {orderedDetails?.map((i, index) => {
                return (
                  <div key={index}>
                    {i?.name === "Clinic Name" && (
                      <p
                        style={{
                          color: i?.styles?.color,
                          fontSize: i?.styles?.size,
                          fontWeight: i?.styles?.weight,
                          fontFamily: i?.styles?.font,
                        }}
                        className="text-[18px] font-semibold"
                      >
                        {i?.value}
                      </p>
                    )}

                    {i?.name === "Address" && (
                      <p
                        style={{
                          color: i?.styles?.color,
                          fontSize: i?.styles?.size,
                          fontWeight: i?.styles?.weight,
                          fontFamily: i?.styles?.font,
                        }}
                        className="text-[14px] py-1 break-words text-secondary_text"
                      >
                        {i?.value}
                      </p>
                    )}

                    {i?.name === "Contact Number" && (
                      <p
                        style={{
                          color: i?.styles?.color,
                          fontSize: i?.styles?.size,
                          fontWeight: i?.styles?.weight,
                          fontFamily: i?.styles?.font,
                        }}
                        className="text-[14px] pt-1 break-words text-secondary_text flex items-center gap-2"
                      >
                        <FiPhone size={14} /> {i?.value}
                      </p>
                    )}

                    {i?.name === "GST No" && (
                      <p
                        style={{
                          color: i?.styles?.color,
                          fontSize: i?.styles?.size,
                          fontWeight: i?.styles?.weight,
                          fontFamily: i?.styles?.font,
                        }}
                        className="text-[14px] break-words text-secondary_text"
                      >
                        License No: {i?.value}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="prescription-top-container-right-side text-end  w-[50%]">
            {doctorDetailsArray?.map((i, index) => {
              return (
                <div key={index}>
                  {i?.name === "Doctor Name" && (
                    <p
                      style={{
                        color: i?.styles?.color,
                        fontSize: i?.styles?.size,
                        fontWeight: i?.styles?.weight,
                        fontFamily: i?.styles?.font,
                      }}
                    >
                      {i?.value}
                    </p>
                  )}

                  {i?.name === "Degree" && (
                    <p
                      style={{
                        color: i?.styles?.color,
                        fontSize: i?.styles?.size,
                        fontWeight: i?.styles?.weight,
                        fontFamily: i?.styles?.font,
                      }}
                    >
                      {i?.value}
                    </p>
                  )}

                  {i?.name === "Speciality" && (
                    <p
                      style={{
                        color: i?.styles?.color,
                        fontSize: i?.styles?.size,
                        fontWeight: i?.styles?.weight,
                        fontFamily: i?.styles?.font,
                      }}
                    >
                      ({i?.value})
                    </p>
                  )}

                  {i?.name === "Work" && (
                    <p
                      style={{
                        color: i?.styles?.color,
                        fontSize: i?.styles?.size,
                        fontWeight: i?.styles?.weight,
                        fontFamily: i?.styles?.font,
                      }}
                    >
                      {i?.value}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-3 py-3 px-1 border-t-[1px] border-b-[1px] border-gray-300 grid grid-cols-6">
          {headerDetails?.map((i, index) => (
            <p
              key={index}
              style={{
                color: i?.styles?.color,
                fontSize: i?.styles?.size,
                fontWeight: i?.styles?.weight,
                fontFamily: i?.styles?.font,
              }}
              className={`${index === 0 ? "col-span-3" : "col-span-1"}`}
            >
              {i.value}:
            </p>
          ))}
        </div>

        <div className="w-full flex items-end justify-end my-3">
          <p
            style={{
              color: headerDetails?.[0]?.styles?.color,
              fontSize: headerDetails?.[0]?.styles?.size,
              fontWeight: headerDetails?.[0]?.styles?.weight,
              fontFamily: headerDetails?.[0]?.styles?.font,
            }}
            className="text-start   w-[25%] max-w-[40%]"
          >
            Date:
          </p>
        </div>

        {mainDetails?.map((i, index) => (
          <div
            key={index}
            className=" min-h-[150px] mt-3 px-1 flex flex-col gap-2"
          >
            <p
              style={{
                color: i?.styles?.color,
                fontSize: i?.styles?.size,
                fontWeight: i?.styles?.weight,
                fontFamily: i?.styles?.font,
              }}
              className=""
            >
              {i.value}
            </p>
            <p className="pl-1"></p>
          </div>
        ))}
      </PDFExport>

      <ModelResponsive
        showDrawer={openPreview}
        closePopup={setOpenPreview}
        width="595px"
        height="842px"
      >
        <div className="w-full h-full pt-3">
          <div className="prescription-top-container flex items-center w-full px-3">
            <div className="prescription-top-container-left-side w-[50%] border-r-[3px] flex items-center space-x-2">
              <div className="felx items-center flex-col space-y-2 w-[40%] pt-1">
                <div className="w-[70px] h-[70px] mx-auto rounded-full border-[3px] border-green_light overflow-hidden ">
                  <img
                    src={clinicLogo.logo}
                    className="w-full h-full object-fill"
                  />
                </div>
                {/* <p className="text-center font-semibold py-2  break-words">
                {clinicLogo?.title}
              </p> */}
              </div>
              <div className="w-full">
                {orderedDetails.map((i, index) => {
                  return (
                    <div key={index}>
                      {i?.name === "Clinic Name" && (
                        <p
                          style={{
                            color: i?.styles?.color,
                            fontSize: i?.styles?.size,
                            fontWeight: i?.styles?.weight,
                            fontFamily: i?.styles?.font,
                          }}
                          className="text-[18px] font-semibold"
                        >
                          {i?.value}
                        </p>
                      )}

                      {i?.name === "Address" && (
                        <p
                          style={{
                            color: i?.styles?.color,
                            fontSize: i?.styles?.size,
                            fontWeight: i?.styles?.weight,
                            fontFamily: i?.styles?.font,
                          }}
                          className="text-[14px] py-1 break-words text-secondary_text"
                        >
                          {i?.value}
                        </p>
                      )}

                      {i?.name === "Contact Number" && (
                        <p
                          style={{
                            color: i?.styles?.color,
                            fontSize: i?.styles?.size,
                            fontWeight: i?.styles?.weight,
                            fontFamily: i?.styles?.font,
                          }}
                          className="text-[14px] pt-1 break-words text-secondary_text flex items-center gap-2"
                        >
                          <FiPhone size={14} /> {i?.value}
                        </p>
                      )}

                      {i?.name === "GST No" && (
                        <p
                          style={{
                            color: i?.styles?.color,
                            fontSize: i?.styles?.size,
                            fontWeight: i?.styles?.weight,
                            fontFamily: i?.styles?.font,
                          }}
                          className="text-[14px] break-words text-secondary_text"
                        >
                          License No: {i?.value}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="prescription-top-container-right-side text-end  w-[50%]">
              {doctorDetailsArray?.map((i, index) => {
                return (
                  <div key={index}>
                    {i?.name === "Doctor Name" && (
                      <p
                        style={{
                          color: i?.styles?.color,
                          fontSize: i?.styles?.size,
                          fontWeight: i?.styles?.weight,
                          fontFamily: i?.styles?.font,
                        }}
                      >
                        {i?.value}
                      </p>
                    )}

                    {i?.name === "Degree" && (
                      <p
                        style={{
                          color: i?.styles?.color,
                          fontSize: i?.styles?.size,
                          fontWeight: i?.styles?.weight,
                          fontFamily: i?.styles?.font,
                        }}
                      >
                        {i?.value}
                      </p>
                    )}

                    {i?.name === "Speciality" && (
                      <p
                        style={{
                          color: i?.styles?.color,
                          fontSize: i?.styles?.size,
                          fontWeight: i?.styles?.weight,
                          fontFamily: i?.styles?.font,
                        }}
                      >
                        ({i?.value})
                      </p>
                    )}

                    {i?.name === "Work" && (
                      <p
                        style={{
                          color: i?.styles?.color,
                          fontSize: i?.styles?.size,
                          fontWeight: i?.styles?.weight,
                          fontFamily: i?.styles?.font,
                        }}
                      >
                        {i?.value}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-3 py-3 px-1 border-t-[1px] border-b-[1px] border-gray-300 grid grid-cols-6">
            {headerDetails?.map((i, index) => (
              <p
                key={index}
                style={{
                  color: i?.styles?.color,
                  fontSize: i?.styles?.size,
                  fontWeight: i?.styles?.weight,
                  fontFamily: i?.styles?.font,
                }}
                className={`${index === 0 ? "col-span-3" : "col-span-1"}`}
              >
                {i?.value}:
              </p>
            ))}
          </div>

          <div className="w-full flex items-end justify-end my-3">
            <p
              style={{
                color: headerDetails?.[0]?.styles?.color,
                fontSize: headerDetails?.[0]?.styles?.size,
                fontWeight: headerDetails?.[0]?.styles?.weight,
                fontFamily: headerDetails?.[0]?.styles?.font,
              }}
              className="text-start   w-[25%] max-w-[40%]"
            >
              Date:
            </p>
          </div>

          {mainDetails?.map((i, index) => (
            <div
              key={index}
              className=" min-h-[150px] mt-3 px-1 flex flex-col gap-2"
            >
              <p
                style={{
                  color: i?.styles?.color,
                  fontSize: i?.styles?.size,
                  fontWeight: i?.styles?.weight,
                  fontFamily: i?.styles?.font,
                }}
                className=""
              >
                {i.value}:
              </p>
              <p className="pl-1"></p>
            </div>
          ))}
        </div>
      </ModelResponsive>
    </div>
  );
};

export default LeftSide;
