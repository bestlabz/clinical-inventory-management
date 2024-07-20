import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";

import PatientsViewpage from "../../../hooks/ViewDetails/PatientsViewpage";

const PatientsView = ({ setviewPage, headerText, id }) => {
  const { loader } = PatientsViewpage({ id });

  const { details } = useSelector((state) => state.DetailsPage);

  console.log("details", details);

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

          <h1 className="text-[24px] font-bold mb-2 mt-6">Personal Details</h1>
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
                  AGE<span>:</span>
                </span>
                <span className="view-page-personal-details-container-body-details-value">
                  {details?.age || ""}
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

          <h1 className="text-[24px] font-bold mb-2">Appoinment history</h1>
          <div className="  w-full grid grid-cols-2 gap-4 pl ">
            {details?.appointment_history?.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" p-2 border-[1px] border-gray-300 rounded-lg flex flex-col gap-3"
                >
                  <div className=" flex items-center justify-between gap-3">
                    <p>
                      <strong className="text-gray_text">Date: </strong>
                      {item?.appointment_date}{" "}
                    </p>
                    <p>
                      <strong className="text-gray_text">Time: </strong>
                      {item?.time}
                    </p>
                  </div>
                  <p>
                    <strong className="text-gray_text">Doctor: </strong>
                    {item?.doctor?.name}
                  </p>
                  <p>
                    <strong className="text-gray_text">Reason: </strong>
                    <br />
                    {item?.reason}
                  </p>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default PatientsView;
