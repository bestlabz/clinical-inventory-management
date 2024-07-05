import React, { useState } from "react";

import { MdBlock } from "react-icons/md";
import { BiSolidFilePdf } from "react-icons/bi";
import { IoMdArrowRoundBack } from "react-icons/io";

import ViewPageFunction from "../../../hooks/ViewDetails/ViewPage";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

import ModelResponsive from "./ModelResponsive";

const ViewPage = ({
  timeSlot = true,
  setviewPage,
  headerText,
  id,
  category,
}) => {
  const { loader, clear, handleChange, setModel, loader1, model, setClear } =
    ViewPageFunction({ category, id });

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

          <h1 className="text-[24px] font-bold mb-2">Personal Details</h1>
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

          <h1 className="text-[24px] font-bold mb-2">Certificate</h1>

          <div className="view-page-certificate-container mb-6">
            <div className="view-page-certificate-container-image">
              <img
                src={details?.postgraduate_certificate || ""}
                className="view-page-certificate-container-image-view"
              />
              <div className="view-page-certificate-container-image-name-container">
                <BiSolidFilePdf color="#FF2D00" size={40} />
                <p className="view-page-certificate-container-image-name">
                  <span className="text-[13px] ">certificate1.pdf</span>
                  {/* <span className="text-[12px] text-gray-400 ">200KB</span> */}
                </p>
              </div>
            </div>
            <div className="view-page-certificate-container-image">
              <img
                src={details?.undergraduate_certificate || ""}
                className="view-page-certificate-container-image-view"
              />
              <div className="view-page-certificate-container-image-name-container">
                <BiSolidFilePdf color="#FF2D00" size={40} />
                <p className="view-page-certificate-container-image-name">
                  <span className="text-[13px] ">certificate2.pdf</span>
                  {/* <span className="text-[12px] text-gray-400 ">200KB</span> */}
                </p>
              </div>
            </div>
          </div>

          {/* <div className="certificate-verify-button-container">
        <button className="certificate-verify-button">Reject</button>
        <button className="certificate-verify-button2">Verify</button>
      </div> */}
          {timeSlot && (
            <>
              <h1 className="text-[24px] font-bold mb-2">Schedule</h1>

              <div className="view-page-time-slot-container">
                <p className="view-page-time-slot">9 AM - 10 AM</p>
                <p className="view-page-time-slot">9 AM - 10 AM</p>
                <p className="view-page-time-slot">9 AM - 10 AM</p>
                <p className="view-page-time-slot">9 AM - 10 AM</p>
              </div>
            </>
          )}

          <div className="flex items-center justify-center mt-16">
            <button className="bg-primary_color text-white w-[300px] py-3 rounded-lg">
              Verify
            </button>
          </div>
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
