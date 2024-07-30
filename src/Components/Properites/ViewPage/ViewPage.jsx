import React, { useState } from "react";

import { MdBlock } from "react-icons/md";
import { BiSolidFilePdf } from "react-icons/bi";
import { IoMdArrowRoundBack } from "react-icons/io";

import ViewPageFunction from "../../../hooks/ViewDetails/ViewPage";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { FaFileImage } from "react-icons/fa";

import ModelResponsive from "./ModelResponsive";
import Select from "../Select/Select";

const ViewPage = ({
  timeSlot = true,
  setviewPage,
  headerText,
  id,
  category,
}) => {
  const {
    loader,
    clear,
    handleChange,
    setModel,
    loader1,
    model,
    setClear,
    setVerifyCertificate,
    verifyCertificate,
    setVerifyDoctor,
    verifyDoctor,
    TimeSlotsResult,
  } = ViewPageFunction({ category, id });

  const { details } = useSelector((state) => state.DetailsPage);

  const [detailsAction, setDetailsAction] = useState({
    id: "",
    value: "",
  });


  return (
    <div className=" w-full h-full overflow-auto ">
      {loader ? (
        <div className="flex items-center justify-center w-full h-full">
          <ClipLoader size={40} />
        </div>
      ) : (
        <>
          <div className="View-page-top">
            <h1 className="view-page-top-text flex items-center gap-3">
              <IoMdArrowRoundBack
                className="cursor-pointer"
                onClick={() => setviewPage(false)}
              />
              {headerText}
            </h1>
          </div>

          {category === "doctor" && details?.clinics?.verified && (
            <div className="view-page-button-container">
              {details?.clinics?.block ? (
                <button
                  onClick={() => {
                    setDetailsAction({
                      id: id,
                      value: false,
                    });
                    setModel(true);
                  }}
                  className="view-page-button1"
                >
                  UnBlock Account
                </button>
              ) : (
                <button
                  onClick={() => {
                    setDetailsAction({
                      id: id,
                      value: true,
                    });
                    setModel(true);
                  }}
                  className="view-page-button"
                >
                  Block Account <MdBlock size={20} />
                </button>
              )}
            </div>
          )}

          {category === "receptionist" && details?.verify && (
            <div className="view-page-button-container">
              {details?.block ? (
                <button
                  onClick={() => {
                    setDetailsAction({
                      id: id,
                      value: false,
                    });
                    setModel(true);
                  }}
                  className="view-page-button1"
                >
                  UnBlock Account
                </button>
              ) : (
                <button
                  onClick={() => {
                    setDetailsAction({
                      id: id,
                      value: true,
                    });
                    setModel(true);
                  }}
                  className="view-page-button"
                >
                  Block Account <MdBlock size={20} />
                </button>
              )}
            </div>
          )}

          <h1 className="text-[24px] font-bold mb-2 mt-4">Personal Details</h1>
          <div className="view-page-personal-details-container">
            <div className="view-page-personal-details-container-body">
              <div className="w-full flex items-center gap-2">
                <span className="view-page-personal-details-container-body-details-key">
                  Name<span>:</span>
                </span>
                <span className="view-page-personal-details-container-body-details-value">
                  {details?.name || ""}
                </span>
              </div>
              <div className="w-full flex items-center gap-2">
                <span className="view-page-personal-details-container-body-details-key">
                  Gender<span>:</span>
                </span>
                <span className="view-page-personal-details-container-body-details-value">
                  {details?.gender || ""}
                </span>
              </div>
              <div className="w-full flex items-center gap-2">
                <span className="view-page-personal-details-container-body-details-key">
                  Address<span>:</span>
                </span>
                <span className="view-page-personal-details-container-body-details-value">
                  {details?.address || ""}
                </span>
              </div>
            </div>
            <div className="view-page-personal-details-container-body">
              <div className="w-full flex items-center gap-2">
                <span className="view-page-personal-details-container-body-details-key">
                  Phone number<span>:</span>
                </span>
                <span className="view-page-personal-details-container-body-details-value">
                  {details?.mobile_number || ""}
                </span>
              </div>
              <div className="w-full flex items-center gap-2">
                <span className="view-page-personal-details-container-body-details-key">
                  Mail ID<span>:</span>
                </span>
                <span className="view-page-personal-details-container-body-details-value">
                  {details?.email || ""}
                </span>
              </div>
              <div className="w-full flex items-center gap-2">
                <span className="view-page-personal-details-container-body-details-key">
                  DOB<span>:</span>
                </span>
                <span className="view-page-personal-details-container-body-details-value">
                  {details?.dob || ""}
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-[24px] font-bold mb-2">Education Details</h1>

          <div className="view-page-personal-details-container-body1">
            {category === "doctor" ? (
              <>
                {" "}
                <div className="w-full flex items-center gap-2">
                  <span className="view-page-personal-details-container-body-details-key">
                    Under Graduate<span>:</span>
                  </span>
                  <span className="view-page-personal-details-container-body-details-value"></span>
                </div>
                <div className="w-full flex items-center gap-2">
                  <span className="view-page-personal-details-container-body-details-key">
                    Post Graduate<span>:</span>
                  </span>
                  <span className="view-page-personal-details-container-body-details-value"></span>
                </div>
                <div className="w-full flex items-center gap-2">
                  <span className="view-page-personal-details-container-body-details-key">
                    Specialist<span>:</span>
                  </span>
                  <span className="view-page-personal-details-container-body-details-value">
                    {details?.specialist || ""}
                  </span>
                </div>
              </>
            ) : (
              <div className="w-full flex items-center gap-2">
                <span className="view-page-personal-details-container-body-details-key">
                  Qualification<span>:</span>
                </span>
                <span className="view-page-personal-details-container-body-details-value"></span>
              </div>
            )}
          </div>

          <h1 className="text-[24px] font-bold mb-2">Certificates</h1>

          <div className="view-page-certificate-container mb-6">
            {category === "doctor" ? (
              <>
                <div className="view-page-certificate-container-image">
                  <img
                    onClick={() =>
                      window.open(details?.postgraduate_certificate, "_blank")
                    }
                    src={details?.postgraduate_certificate || ""}
                    className="view-page-certificate-container-image-view"
                  />
                  <div
                    onClick={() =>
                      window.open(details?.postgraduate_certificate, "_blank")
                    }
                    className="view-page-certificate-container-image-name-container"
                  >
                    {details?.postgraduate_certificate?.split(".")?.pop() ===
                    "pdf" ? (
                      <BiSolidFilePdf color="#d8d8d8" size={30} />
                    ) : (
                      <FaFileImage color="#d8d8d8" size={30} />
                    )}
                    <span className="text-[13px] ">
                      {details?.postgraduate_certificate &&
                      details?.postgraduate_certificate?.split("/").pop()
                        .length > 10
                        ? details?.postgraduate_certificate
                            .split("/")
                            .pop()
                            .substring(0, 15) +
                          "." +
                          details?.postgraduate_certificate?.split(".")?.pop()
                        : details?.postgraduate_certificate?.split("/").pop()}
                    </span>
                  </div>
                </div>
                <div className="view-page-certificate-container-image">
                  <img
                    onClick={() =>
                      window.open(details?.undergraduate_certificate, "_blank")
                    }
                    src={details?.undergraduate_certificate || ""}
                    className="view-page-certificate-container-image-view"
                  />
                  <div
                    onClick={() =>
                      window.open(details?.undergraduate_certificate, "_blank")
                    }
                    className="view-page-certificate-container-image-name-container"
                  >
                    {details?.undergraduate_certificate?.split(".")?.pop() ===
                    "pdf" ? (
                      <BiSolidFilePdf color="#d8d8d8" size={30} />
                    ) : (
                      <FaFileImage color="#d8d8d8" size={30} />
                    )}
                    <p className="view-page-certificate-container-image-name">
                      <span className="text-[13px] ">
                        {details?.undergraduate_certificate &&
                        details?.undergraduate_certificate?.split("/").pop()
                          .length > 10
                          ? details?.undergraduate_certificate
                              ?.split("/")
                              .pop()
                              .substring(0, 15) +
                            "." +
                            details?.undergraduate_certificate
                              ?.split(".")
                              ?.pop()
                          : details?.undergraduate_certificate
                              ?.split("/")
                              .pop()}
                      </span>
                      {/* <span className="text-[12px] text-gray-400 ">200KB</span> */}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="view-page-certificate-container-image">
                  {details?.certificate?.split(".")?.pop() === "pdf" ? (
                    <div
                      onClick={() =>
                        window.open(details?.certificate, "_blank")
                      }
                      className="view-page-certificate-container-image-view flex items-center justify-center"
                    >
                      <BiSolidFilePdf color="#FF2D00" size={60} />
                    </div>
                  ) : (
                    <img
                      onClick={() =>
                        window.open(details?.certificate, "_blank")
                      }
                      src={details?.certificate || ""}
                      className="view-page-certificate-container-image-view"
                    />
                  )}
                  <div
                    onClick={() => window.open(details?.certificate, "_blank")}
                    className="view-page-certificate-container-image-name-container"
                  >
                    {details?.certificate?.split(".")?.pop() === "pdf" ? (
                      <BiSolidFilePdf color="#d8d8d8" size={40} />
                    ) : (
                      <FaFileImage color="#d8d8d8" size={40} />
                    )}
                    <p className="view-page-certificate-container-image-name">
                      <span className="text-[13px] ">
                        {details?.certificate &&
                        details?.certificate?.split("/").pop().length > 10
                          ? details?.certificate
                              ?.split("/")
                              .pop()
                              .substring(0, 15) +
                            "." +
                            details?.certificate?.split(".")?.pop()
                          : details?.certificate?.split("/").pop()}
                      </span>
                      {/* <span className="text-[12px] text-gray-400 ">200KB</span> */}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

          {category === "doctor" && (
            <div className="certificate-verify-button-container">
              {/* <button className="certificate-verify-button">Reject</button> */}
              {verifyCertificate ? (
                <button className="certificate-verify-button2">
                  <ClipLoader color="#fff" size={20} />
                </button>
              ) : (
                <button
                  onClick={() =>
                    details?.details &&
                    !details?.clinics?.postgraduate_certificate_verify &&
                    !details?.clinics?.undergraduate_certificate_verify &&
                    setVerifyCertificate(true)
                  }
                  className={`certificate-verify-button2 ${
                    details?.details &&
                    !details?.clinics?.postgraduate_certificate_verify &&
                    !details?.clinics?.undergraduate_certificate_verify
                      ? "bg-primary_color"
                      : "bg-gray-400"
                  }`}
                  disabled={
                    details?.details &&
                    !details?.clinics?.postgraduate_certificate_verify &&
                    !details?.clinics?.undergraduate_certificate_verify
                      ? false
                      : true
                  }
                >
                  {!details?.clinics?.postgraduate_certificate_verify &&
                  !details?.clinics?.undergraduate_certificate_verify
                    ? "Verify"
                    : "Verified"}
                </button>
              )}
            </div>
          )}

          {category === "receptionist" && (
            <div className="certificate-verify-button-container">
              {/* <button className="certificate-verify-button">Reject</button> */}
              {verifyCertificate ? (
                <button className="certificate-verify-button2">
                  <ClipLoader color="#fff" size={20} />
                </button>
              ) : (
                <button
                  onClick={() =>
                    details?.details &&
                    !details?.certificate_verify &&
                    setVerifyCertificate(true)
                  }
                  className={`certificate-verify-button2 ${
                    details?.details && !details?.certificate_verify
                      ? "bg-primary_color"
                      : "bg-gray-400"
                  }`}
                  disabled={
                    details?.details && !details?.certificate_verify
                      ? false
                      : true
                  }
                >
                  {!details?.certificate_verify ? "Verify" : "Verified"}
                </button>
              )}
            </div>
          )}

          {category === "doctor" && (
            <>
              <h1 className="text-[24px] font-bold ">Schedule</h1>
              <div className="view-page-time-slot-container">
                {TimeSlotsResult?.[0]?.slots?.map((item, index) => (
                  <p key={index} className="view-page-time-slot">
                    {item?.timeSlot}
                  </p>
                ))}
              </div>
            </>
          )}

          {category === "doctor" && (
            <div className="flex items-center justify-center mt-16">
              {verifyDoctor ? (
                <button className="bg-primary_color text-white w-[300px] py-3 rounded-lg">
                  <ClipLoader color="#fff" size={20} />
                </button>
              ) : (
                <button
                  onClick={() =>
                    details?.clinics?.postgraduate_certificate_verify &&
                    details?.clinics?.undergraduate_certificate_verify &&
                    !details?.clinics?.verified &&
                    setVerifyDoctor(true)
                  }
                  className={`${
                    details?.clinics?.postgraduate_certificate_verify &&
                    details?.clinics?.undergraduate_certificate_verify &&
                    !details?.clinics?.verified
                      ? "bg-primary_color"
                      : "bg-gray-400"
                  } text-white w-[300px] py-3 rounded-lg`}
                  disabled={
                    details?.clinics?.postgraduate_certificate_verify &&
                    details?.clinics?.undergraduate_certificate_verify &&
                    !details?.clinics?.verified
                      ? false
                      : true
                  }
                >
                  {!details?.clinics?.verified ? "Verify" : "Verified"}
                </button>
              )}
            </div>
          )}
          {/* !details?.verify */}
          {category === "receptionist" && (
            <div className="flex items-center justify-center mt-16">
              {verifyDoctor ? (
                <button className="bg-primary_color text-white w-[300px] py-3 rounded-lg">
                  <ClipLoader color="#fff" size={20} />
                </button>
              ) : (
                <button
                  onClick={() =>
                    details?.certificate_verify &&
                    !details?.verify &&
                    setVerifyDoctor(true)
                  }
                  className={`${
                    details?.certificate_verify && !details?.verify
                      ? "bg-primary_color"
                      : "bg-gray-400"
                  } text-white w-[300px] py-3 rounded-lg`}
                  disabled={
                    details?.certificate_verify && !details?.verify
                      ? false
                      : true
                  }
                >
                  {details?.certificate_verify && !details?.verify
                    ? "Verify"
                    : "Verified"}
                </button>
              )}
            </div>
          )}
        </>
      )}

      <ModelResponsive
        modalpopup={model}
        openModal={setModel}
        trigger={handleChange}
        details={detailsAction}
        clear={clear}
        setClear={setClear}
        loader={loader1}
      />
    </div>
  );
};

export default ViewPage;
