import React, { useState } from "react";
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
import QRCODE from "../../assets/qr_code.jpg";

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
    balanceDue,
    balanceModel,
    model,
    setModel,
  } = ProfileFunction();
  const [detailsAction, setDetailsAction] = useState({
    id: "",
    value: "",
  });
  const [steps, setSteps] = useState(1);
  const [transitationID, setTransitationID] = useState("");
  const [err, setErr] = useState(false);
  const [paymentLoader, setPaymentLoader] = useState(false);

  const { userDetails } = useSelector((state) => state.userinfo);

  const subscriptionDetails = userDetails?.subscription_details || [];

  const dateString =
    userDetails?.subscription_details[
      userDetails?.subscription_details?.length - 1
    ];

  let date = null;

  const TimeString = dateString?.subscription_enddate?.split(" ")[1];

  if (dateString) {
    const DateString = dateString?.subscription_enddate?.split(" ")[0];

    const [day, month, year] = DateString?.split("-");
    date = new Date(year, month - 1, day);
  }

  const currentDateFormat = dayjs().format("YYYY-MM-DD");
  const currentTime = dayjs().format("HH:mm:ss");

  const DateString =
    userDetails?.subscription_details[
      userDetails?.subscription_details?.length - 1
    ].subscription_enddate?.split(" ")?.[0];
  const DateTime =
    userDetails?.subscription_details[
      userDetails?.subscription_details?.length - 1
    ].subscription_enddate?.split(" ")?.[1];
  const dueDate = dayjs(DateString).format("YYYY-MM-DD");
  const planDate = `${dueDate}T${DateTime}`;
  const currentDate = `${currentDateFormat}T${currentTime}`; // Example of another date
  const planDateObj = dayjs(planDate);
  const currentDateObj = dayjs(currentDate);

  // Check if date is greater than otherDate
  const isGreaterThan = currentDateObj.isAfter(planDateObj);

  const handlePay = async (id, value, reason) => {
    try {
      setLoader(true);
      const { success, message } = await ApiRequest.post(
        `/updateSubscription/${userDetails?._id}`,
        {
          subscription_id: id,
          transaction_id: reason,
        }
      );

      if (success) {
        setClear(true);
        setLoader(false);
        toast.success(message);
        window.location.reload();
        return;
      }
    } catch (error) {
      console.log("ee", error);
    }
  };

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
            {isGreaterThan ? (
              <>
                Current Plan : <strong className="text-black">Expired</strong>
              </>
            ) : (
              <>
                Next Bill date:{" "}
                <strong className="text-black">
                  {dayjs(date).format("DD MMMM YYYY")} {TimeString}
                </strong>
              </>
            )}
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
            <div className="w-full min-h-[120px] flex items-center justify-center relative">
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
                className=" view-page-button !text-blue !border-blue absolute right-2 top-[38%] 2xl:block xl:block lg:block md:block sm:hidden xs:hidden mobile:hidden xss:hidden"
              >
                Billing history
              </button>
              <button
                type="button"
                onClick={closePayModel}
                className=" view-page-button !text-green_light !border-green_light absolute right-2 -top-[10%] 2xl:block xl:block lg:block md:block sm:hidden xs:hidden mobile:hidden xss:hidden"
              >
                Pay Now
              </button>
              <button
                type="button"
                onClick={balanceModel}
                className=" view-page-button !text-red !border-red absolute right-2 top-[86%] 2xl:block xl:block lg:block md:block sm:hidden xs:hidden mobile:hidden xss:hidden"
              >
                Balance Due
              </button>
            </div>

            <div className="w-[90%] grid  gap-6 mt-6 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 mobile:grid-cols-1 xss:grid-cols-1">
              <Input
                label="Name"
                name="name"
                id="name"
                value={values.name}
                setValue={(e) => {
                  if (/^[a-zA-Z\s]*$/.test(e.target.value)) {
                    handleChange(e);
                  }
                }}
                err={error && errors.name}
              />
              <Input
                label="Clinic Name"
                name="clinic_name"
                id="clinic_name"
                value={values.clinic_name}
                setValue={(e) => {
                  if (/^[a-zA-Z\s]*$/.test(e.target.value)) {
                    handleChange(e);
                  }
                }}
                err={error && errors.clinic_name}
              />
              <Input
                label="Email"
                name="email"
                id="email"
                value={values.email}
                setValue={handleChange}
                err={error && errors.email}
                disabled={true}
              />
              <Input
                label="Mobile Number"
                name="mobile_number"
                id="mobile_number"
                value={`+91 ${values.mobile_number}`}
                setValue={(e) => {
                  if (/^\d*$/.test(e.target.value)) {
                    handleChange(e);
                  }
                }}
                length={10}
                err={error && errors.mobile_number}
                disabled={true}
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
              { title: "View" },

            ]}
            tableBody={subscriptionDetails}
            tableName="subscription"
            // date={date}
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

      <ModelPopup showDrawer={balanceDue} height="90%" width="90%">
        <div className=" w-full h-full overflow-hidden ">
          <div className="relative">
            <button
              onClick={balanceModel}
              className=" absolute right-3 hover:text-red-500 transition-all duration-300"
            >
              <IoClose size={20} />
            </button>
          </div>

          <div className=" w-[95%] h-[90%] mx-auto overflow-auto mt-6">
            <h1 className=" text-[22px] font-semibold">Balance Due </h1>
            <div className="grid grid-cols-4 mt-3 overflow-auto">
              <h1 className=" col-span-2 text-[16px] font-bold">
                Subscription Name
              </h1>
              <h1 className=" col-span-1 text-[16px] font-bold text-end">
                Duration
              </h1>
              <h1 className=" col-span-1 text-[16px] font-bold text-end">
                Price
              </h1>
            </div>
            <div className="grid grid-cols-4 mt-3">
              <h1 className=" col-span-2 text-[16px] font-normal">Standard</h1>
              <h1 className=" col-span-1 text-[16px] font-normal text-end">
                3 Month
              </h1>
              <h1 className=" col-span-1 text-[16px] font-bold text-end">
                ₹599
              </h1>
            </div>

            <div className="w-full h-[2px] bg-light_gray my-3"></div>

            <div className="grid grid-cols-5 mt-6 overflow-auto">
              <h1 className=" col-span-2 text-[16px] font-bold">
                Doctors Count
              </h1>
              <h1 className=" col-span-1 text-[16px] font-bold text-end">
                Paid
              </h1>
              <h1 className=" col-span-1 text-[16px] font-bold text-end">
                Unpaid
              </h1>
              <h1 className=" col-span-1 text-[16px] font-bold text-end">
                Balance Due
              </h1>
            </div>

            <div className="grid grid-cols-5 mt-3">
              <h1 className=" col-span-2 text-[16px] font-normal">
                Doctors x 4
              </h1>
              <h1 className=" col-span-1 text-[16px] font-normal text-end">
                {" "}
                3
              </h1>
              <h1 className=" col-span-1 text-[16px]  text-end">1</h1>
              <h1 className=" col-span-1 text-[16px] font-bold text-end text-red-500">
                ₹599
              </h1>
            </div>
            <div className="w-full h-[2px] bg-light_gray my-3"></div>

            <div className="grid grid-cols-5 mt-6 overflow-auto">
              <h1 className=" col-span-2 text-[16px] font-bold">
                Receptionist Count
              </h1>
              <h1 className=" col-span-1 text-[16px] font-bold text-end">
                Paid
              </h1>
              <h1 className=" col-span-1 text-[16px] font-bold text-end">
                Unpaid
              </h1>
              <h1 className=" col-span-1 text-[16px] font-bold text-end">
                Balance Due
              </h1>
            </div>

            <div className="grid grid-cols-5 mt-3">
              <h1 className=" col-span-2 text-[16px] font-normal">
                Receptionist x 3
              </h1>
              <h1 className=" col-span-1 text-[16px] font-normal text-end">
                {" "}
                1
              </h1>
              <h1 className=" col-span-1 text-[16px]  text-end">2</h1>
              <h1 className=" col-span-1 text-[16px] font-bold text-end text-red-500">
                ₹1198
              </h1>
            </div>
            <div className="w-full h-[2px] bg-light_gray my-3"></div>

            <div className="grid grid-cols-5 mt-6 overflow-auto">
              <h1 className=" col-span-2 text-[16px] font-bold"></h1>
              <h1 className=" col-span-1 text-[16px] font-bold text-end"></h1>
              <h1 className=" col-span-1 text-[16px] font-bold text-end">
                Balance Due{" "}
              </h1>
              <h1 className=" col-span-1 text-[16px] font-bold text-end text-red-500">
                ₹1797
              </h1>
            </div>

            <div className="grid grid-cols-5 mt-6 overflow-auto">
              <h1 className=" col-span-2 text-[16px] font-bold"></h1>
              <h1 className=" col-span-1 text-[16px] font-bold text-end"></h1>
              <h1 className=" col-span-1 text-[16px] font-bold text-end">
                Total Amount
              </h1>
              <h1 className=" col-span-1 text-[16px] font-bold text-end">
                ₹1797
              </h1>
            </div>

            <div className="w-full h-[2px] bg-light_gray my-3"></div>
          </div>

          <div className=" w-full flex items-center justify-end px-3">
            <button
              onClick={() => setModel(!model)}
              className="w-[150px] py-2 rounded-md font-semibold bg-primary_color text-white"
            >
              Pay Now
            </button>
          </div>
        </div>
      </ModelPopup>

      {model && (
        <>
          <div className=" 2xl:block xl:block lg:hidden md:hidden sm:hidden xs:hidden mobile:hidden xss:hidden">
            <ModelPopup showDrawer={model} width="25%" height="53%">
              <button
                onClick={() => setModel(false)}
                className=" absolute right-2 hover:text-red-500 transition-all duration-300"
              >
                <IoClose size={20} />
              </button>
              <div className="flex flex-col gap-4 items-center justify-start mt-3 w-full h-full">
                {steps === 1 && (
                  <>
                    <p className="text-[18px] font-semibold text-center w-[80%]">
                      Scan the QR Code and pay
                    </p>
                    <div className="w-[70%] h-[60%] flex items-center justify-normal">
                      <img
                        src={QRCODE}
                        alt="qrCode"
                        className="w-full h-full object-fill"
                      />
                    </div>
                    <button
                      onClick={() => setSteps(2)}
                      className=" w-[70%] mt-4 text-blue transition-all duration-300 hover:text-white py-2 border-[2px] border-blue hover:bg-blue rounded-md"
                    >
                      Next
                    </button>
                  </>
                )}

                {steps === 2 && (
                  <div className=" w-full h-full flex flex-col items-center justify-start ">
                    <p className=" w-full text-start px-4">
                      <IoMdArrowRoundBack
                        size={20}
                        className="cursor-pointer"
                        onClick={() => setSteps(1)}
                      />
                    </p>
                    <p className="text-[18px] font-semibold text-center">
                      Enter your Transaction ID
                    </p>

                    <div className=" w-[80%] h-full flex flex-col justify-center">
                      <p className=" text-start mt-4 font-medium text-[18px] py-2">
                        Transaction ID
                      </p>
                      <input
                        onChange={(e) => {
                          setTransitationID(e.target.value);
                          setErr(false);
                        }}
                        value={transitationID}
                        placeholder="Transaction "
                        className=" w-full rounded-lg border-[1px] border-gray-400 p-2 resize-none outline-none"
                      />

                      {err && <p className="text-red-500">Require</p>}
                    </div>
                    <div className="flex items-start justify-center w-[80%] h-full gap-4">
                      {paymentLoader ? (
                        <button className="w-full py-1 text-[18px] border-[1px] text-blue border-primary_color  rounded-md">
                          <ClipLoader size={15} color="#0073EE" />
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            if (transitationID !== "") {
                              console.log("ID");
                            } else {
                              return setErr(true);
                            }
                          }}
                          className="w-full py-1 text-[18px] border-[1px] text-blue border-primary_color hover:bg-primary_color hover:text-white rounded-md transition-all duration-500"
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </ModelPopup>
          </div>

          <div className=" 2xl:hidden xl:hidden lg:block md:hidden sm:hidden xs:hidden mobile:hidden xss:hidden">
            <ModelPopup showDrawer={model} width="50%" height="70%">
              <button
                onClick={() => setModel(false)}
                className=" absolute right-2 hover:text-red-500 transition-all duration-300"
              >
                <IoClose size={20} />
              </button>
              <div className="flex flex-col gap-4 items-center justify-start mt-3 w-full h-full">
                {steps === 1 && (
                  <>
                    <p className="text-[18px] font-semibold text-center w-[80%]">
                      Scan the QR Code and pay
                    </p>
                    <div className="w-[50%] h-[50%]">
                      <img src={QRCODE} alt="qrCode" />
                    </div>
                    <button
                      onClick={() => setSteps(2)}
                      className=" w-[70%] mt-6 text-blue transition-all duration-300 hover:text-white py-2 border-[2px] border-blue hover:bg-blue rounded-md"
                    >
                      Next
                    </button>
                  </>
                )}

                {steps === 2 && (
                  <div className=" w-full h-full flex flex-col items-center justify-start ">
                    <p className=" w-full text-start px-4">
                      <IoMdArrowRoundBack
                        size={20}
                        className="cursor-pointer"
                        onClick={() => setSteps(1)}
                      />
                    </p>
                    <p className="text-[18px] font-semibold text-center">
                      Enter your Transaction ID
                    </p>

                    <div className=" w-[80%] h-full flex flex-col justify-center">
                      <p className=" text-start mt-4 font-medium text-[18px] py-2">
                        Transaction ID
                      </p>
                      <input
                        onChange={(e) => {
                          setTransitationID(e.target.value);
                          setErr(false);
                        }}
                        value={transitationID}
                        placeholder="Transaction "
                        className=" w-full rounded-lg border-[1px] border-gray-400 p-2 resize-none outline-none"
                      />

                      {err && <p className="text-red-500">Require</p>}
                    </div>
                    <div className="flex items-start justify-center w-[80%] h-full gap-4">
                      {loader ? (
                        <button className="w-full py-1 text-[18px] border-[1px] text-blue border-primary_color  rounded-md">
                          <ClipLoader size={15} color="#0073EE" />
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            if (transitationID !== "") {
                              console.log("ID");
                            } else {
                              return setErr(true);
                            }
                          }}
                          className="w-full py-1 text-[18px] border-[1px] text-blue border-primary_color hover:bg-primary_color hover:text-white rounded-md transition-all duration-500"
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </ModelPopup>
          </div>

          <div className=" 2xl:hidden xl:hidden lg:hidden md:block sm:block xs:hidden mobile:hidden xss:hidden">
            <ModelPopup showDrawer={model} width="60%" height="70%">
              <button
                onClick={() => setModel(false)}
                className=" absolute right-2 hover:text-red-500 transition-all duration-300"
              >
                <IoClose size={20} />
              </button>

              <div className="flex flex-col gap-4 items-center justify-start mt-3 w-full h-full">
                {steps === 1 && (
                  <>
                    <p className="text-[18px] font-semibold text-center w-[80%]">
                      Scan the QR Code and pay
                    </p>
                    <div className="w-[60%] h-[60%]">
                      <img src={QRCODE} alt="qrCode" />
                    </div>
                    <button
                      onClick={() => setSteps(2)}
                      className=" w-[70%] text-blue transition-all duration-300 hover:text-white py-2 border-[2px] border-blue hover:bg-blue rounded-md"
                    >
                      Next
                    </button>
                  </>
                )}

                {steps === 2 && (
                  <div className=" w-full h-full flex flex-col items-center justify-start ">
                    <p className=" w-full text-start px-4">
                      <IoMdArrowRoundBack
                        size={20}
                        className="cursor-pointer"
                        onClick={() => setSteps(1)}
                      />
                    </p>
                    <p className="text-[18px] font-semibold text-center">
                      Enter your Transaction ID
                    </p>

                    <div className=" w-[80%] h-full flex flex-col justify-center">
                      <p className=" text-start mt-4 font-medium text-[18px] py-2">
                        Transaction ID
                      </p>
                      <input
                        onChange={(e) => {
                          setTransitationID(e.target.value);
                          setErr(false);
                        }}
                        value={transitationID}
                        placeholder="Transaction "
                        className=" w-full rounded-lg border-[1px] border-gray-400 p-2 resize-none outline-none"
                      />

                      {err && <p className="text-red-500">Require</p>}
                    </div>
                    <div className="flex items-start justify-center w-[80%] h-full gap-4">
                      {loader ? (
                        <button className="w-full py-1 text-[18px] border-[1px] text-blue border-primary_color  rounded-md">
                          <ClipLoader size={15} color="#0073EE" />
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            if (transitationID !== "") {
                              console.log("ID");
                            } else {
                              return setErr(true);
                            }
                          }}
                          className="w-full py-1 text-[18px] border-[1px] text-blue border-primary_color hover:bg-primary_color hover:text-white rounded-md transition-all duration-500"
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </ModelPopup>
          </div>

          <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block mobile:block xss:hidden">
            <ModelPopup showDrawer={model} width="90%" height="60%">
              <button
                onClick={() => setModel(false)}
                className=" absolute right-2 hover:text-red-500 transition-all duration-300"
              >
                <IoClose size={20} />
              </button>

              <div className="flex flex-col gap-4 items-center justify-start mt-3 w-full h-full">
                {steps === 1 && (
                  <>
                    <p className="text-[18px] font-semibold text-center w-[80%]">
                      Scan the QR Code and pay
                    </p>
                    <div className="w-[80%] h-[60%]">
                      <img
                        src={QRCODE}
                        alt="qrCode"
                        className="w-full h-full object-fill"
                      />
                    </div>
                    <button
                      onClick={() => setSteps(2)}
                      className=" w-[70%] text-blue transition-all duration-300 hover:text-white py-2 border-[2px] border-blue hover:bg-blue rounded-md"
                    >
                      Next
                    </button>
                  </>
                )}

                {steps === 2 && (
                  <div className=" w-full h-full flex flex-col items-center justify-start ">
                    <p className=" w-full text-start px-4">
                      <IoMdArrowRoundBack
                        size={20}
                        className="cursor-pointer"
                        onClick={() => setSteps(1)}
                      />
                    </p>
                    <p className="text-[18px] font-semibold text-center">
                      Enter your Transaction ID
                    </p>

                    <div className=" w-[80%] h-full flex flex-col justify-center">
                      <p className=" text-start mt-4 font-medium text-[18px] py-2">
                        Transaction ID
                      </p>
                      <input
                        onChange={(e) => {
                          setTransitationID(e.target.value);
                          setErr(false);
                        }}
                        value={transitationID}
                        placeholder="Transaction "
                        className=" w-full rounded-lg border-[1px] border-gray-400 p-2 resize-none outline-none"
                      />

                      {err && <p className="text-red-500">Require</p>}
                    </div>
                    <div className="flex items-start justify-center w-[80%] h-full gap-4">
                      {loader ? (
                        <button className="w-full py-1 text-[18px] border-[1px] text-blue border-primary_color  rounded-md">
                          <ClipLoader size={15} color="#0073EE" />
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            if (transitationID !== "") {
                              console.log("ID");
                            } else {
                              return setErr(true);
                            }
                          }}
                          className="w-full py-1 text-[18px] border-[1px] text-blue border-primary_color hover:bg-primary_color hover:text-white rounded-md transition-all duration-500"
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </ModelPopup>
          </div>

          <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:hidden mobile:hidden xss:block">
            <ModelPopup showDrawer={model} width="96%" height="60%">
              <button
                onClick={() => setModel(false)}
                className=" absolute right-2 hover:text-red-500 transition-all duration-300"
              >
                <IoClose size={20} />
              </button>

              <div className="flex flex-col gap-4 items-center justify-start mt-3 w-full h-full">
                {steps === 1 && (
                  <>
                    <p className="text-[18px] font-semibold text-center w-[80%]">
                      Scan the QR Code and pay
                    </p>
                    <div className="w-[80%] h-[60%]">
                      <img
                        src={QRCODE}
                        alt="qrCode"
                        className="w-full h-full object-fill"
                      />
                    </div>
                    <button
                      onClick={() => setSteps(2)}
                      className=" w-[70%] text-blue transition-all duration-300 hover:text-white py-2 border-[2px] border-blue hover:bg-blue rounded-md"
                    >
                      Next
                    </button>
                  </>
                )}

                {steps === 2 && (
                  <div className=" w-full h-full flex flex-col items-center justify-start ">
                    <p className=" w-full text-start px-4">
                      <IoMdArrowRoundBack
                        size={20}
                        className="cursor-pointer"
                        onClick={() => setSteps(1)}
                      />
                    </p>
                    <p className="text-[18px] font-semibold text-center">
                      Enter your Transaction ID
                    </p>

                    <div className=" w-[80%] h-full flex flex-col justify-center">
                      <p className=" text-start mt-4 font-medium text-[18px] py-2">
                        Transaction ID
                      </p>
                      <input
                        onChange={(e) => {
                          setTransitationID(e.target.value);
                          setErr(false);
                        }}
                        value={transitationID}
                        placeholder="Transaction "
                        className=" w-full rounded-lg border-[1px] border-gray-400 p-2 resize-none outline-none"
                      />

                      {err && <p className="text-red-500">Require</p>}
                    </div>
                    <div className="flex items-start justify-center w-[80%] h-full gap-4">
                      {loader ? (
                        <button className="w-full py-1 text-[18px] border-[1px] text-blue border-primary_color  rounded-md">
                          <ClipLoader size={15} color="#0073EE" />
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            if (transitationID !== "") {
                              console.log("ID");
                            } else {
                              return setErr(true);
                            }
                          }}
                          className="w-full py-1 text-[18px] border-[1px] text-blue border-primary_color hover:bg-primary_color hover:text-white rounded-md transition-all duration-500"
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </ModelPopup>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
