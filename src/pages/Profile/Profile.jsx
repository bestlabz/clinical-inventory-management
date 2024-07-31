import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";

import ProfileFunction from "../../hooks/Profile/Profile";
import Input from "../../Components/Properites/Inputs/Input";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import Table from "../../Components/Properites/Table/Table";

import ModelPopup from "../../Components/Properites/ModelPopup/ModelPopup";
import SubscriptionPage from "../../Components/Properites/ErrorPage/SubscriptionPage";
import { IoClose } from "react-icons/io5";

const Profile = () => {
  const {
    handleClick,
    profileRef,
    goBack,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
    values,
    error,
    validationCheck,
    base64Image,
    loader,
    setStep,
    step,
    closePayModel,
    payModel,
  } = ProfileFunction();

  const { userDetails } = useSelector((state) => state.userinfo);

  const subscriptionDetails = userDetails?.subscription_details || [];

  const dateString =
    userDetails?.subscription_details[
      userDetails?.subscription_details?.length - 1
    ];

  let date = null;

  if (dateString) {
    const [day, month, year] = dateString?.subscription_enddate?.split("-");
    date = new Date(year, month - 1, day);
  }

  return (
    <div className="container">
      <div className="View-page-top">
        <div className="h-full flex items-center justify-between gap-3 px-3 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col mobile:flex-col xss:flex-col">
          <h1 className="flex items-center w-full gap-3 view-page-top-text">
            <IoMdArrowRoundBack
              className="cursor-pointer"
              onClick={() => {
                if (step === 1) {
                  goBack();
                } else {
                  setStep(1);
                }
              }}
            />
            Profile
          </h1>
          <span className=" w-full text-end 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] xs:text-[16px] mobile:text-[14px] xss:text-[12px] text-gray-400">
            Next Bill date:{" "}
            <strong className="text-black">
              {dayjs(date).format("DD MMMM YYYY")}
            </strong>
          </span>
        </div>
      </div>

      {step === 1 && (
        <div className="flex items-center flex-col w-full mt-6 gap-6">
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className="flex items-center flex-col w-full"
          >
            <div className="w-full flex items-center justify-center relative">
              <div
                className={`w-[100px] h-[100px] flex items-center justify-center border-[3px] ${
                  error && errors.profile ? "border-red-500" : "border-black"
                } rounded-full relative`}
              >
                {(base64Image || values.profile) && (
                  <img
                    className="w-[95px] h-[95px] overflow-hidden rounded-full object-cover"
                    src={base64Image ? base64Image : values.profile}
                    alt="profile"
                  />
                )}
                <div
                  onClick={handleClick}
                  className=" cursor-pointer absolute w-[30px] h-[30px] bg-gray-200 right-0 -bottom-1 rounded-full flex items-center justify-center"
                >
                  <MdOutlineModeEdit size={16} />
                </div>
                <input
                  ref={profileRef}
                  name="profile"
                  id="profile"
                  type="file"
                  className="hidden"
                  onChange={(e) => setFieldValue("profile", e.target.files[0])}
                />
              </div>
              <button
                type="button"
                onClick={() => setStep(2)}
                className=" view-page-button !text-blue !border-blue absolute right-2 top-[60%] 2xl:block xl:block lg:block md:block sm:hidden xs:hidden mobile:hidden xss:hidden"
              >
                Billing history
              </button>
              <button
                type="button"
                onClick={closePayModel}
                className=" view-page-button !text-green_light !border-green_light absolute right-2 top-0 2xl:block xl:block lg:block md:block sm:hidden xs:hidden mobile:hidden xss:hidden"
              >
                Pay Now
              </button>
            </div>

            <div className="w-[90%] grid  gap-6 mt-6 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 mobile:grid-cols-1 xss:grid-cols-1">
              <Input
                label="Name"
                name="name"
                id="name"
                value={values.name}
                setValue={handleChange}
                err={error && errors.name}
              />
              <Input
                label="Clinic Name"
                name="clinic_name"
                id="clinic_name"
                value={values.clinic_name}
                setValue={handleChange}
                err={error && errors.clinic_name}
              />
              <Input
                label="Email"
                name="email"
                id="email"
                value={values.email}
                setValue={handleChange}
                err={error && errors.email}
              />
              <Input
                label="Mobile Numer"
                name="mobile_number"
                id="mobile_number"
                value={values.mobile_number}
                setValue={handleChange}
                err={error && errors.mobile_number}
              />
            </div>

            {loader ? (
              <button
                type="submit"
                className=" mt-10 bg-blue w-[200px] py-2 rounded-md text-white font-medium hover:bg-opacity-[.8]"
              >
                <ClipLoader size={20} color="#fff" />
              </button>
            ) : (
              <button
                onClick={validationCheck}
                type="submit"
                className=" mt-10 bg-blue w-[200px] py-2 rounded-md text-white font-medium hover:bg-opacity-[.8]"
              >
                Submit
              </button>
            )}
          </form>
        </div>
      )}
      {step === 2 && (
        <div className=" w-full h-[85%] overflow-auto pt-6 px-2">
          <Table
            headers={[
              { title: "S.No" },
              { title: "Name" },
              { title: "Subscription ID" },
              { title: "Transcation ID" },
              { title: "Duration" },
              { title: "Remaining days" },
              { title: "Amount" },
            ]}
            tableBody={subscriptionDetails}
            tableName="subscription"
            date={date}
          />
        </div>
      )}

      <ModelPopup showDrawer={payModel} height="90%" width="90%">
        <div className="relative">
          <button
            onClick={closePayModel}
            className=" absolute right-3 hover:text-red-500 transition-all duration-300"
          >
            <IoClose size={20} />
          </button>

          <SubscriptionPage close={true} />
        </div>
      </ModelPopup>
    </div>
  );
};

export default Profile;
