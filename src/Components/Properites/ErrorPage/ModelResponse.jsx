import React, { useEffect, useState } from "react";

import QRCODE from "../../../assets/qr_code.jpg";

import ModelPopup from "../ModelPopup/ModelPopup";
import { IoClose } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";

//Translate
import TranslateJson from "../../../utils/translation/en.json";
import { ClipLoader } from "react-spinners";

const ModelResponsive = ({
  modalpopup,
  openModal,
  trigger,
  details,
  clear,
  setClear,
  loader = false,
}) => {
  const [reason, setReason] = useState("");

  const [err, setErr] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (clear && setClear) {
      setReason("");
      setClear(false);
      openModal(false);
    }
  }, [clear]);
  return (
    <>
      <div className=" 2xl:block xl:block lg:hidden md:hidden sm:hidden xs:hidden mobile:hidden xss:hidden">
        <ModelPopup showDrawer={modalpopup} width="25%" height="53%">
          <div className="flex flex-col gap-4 items-center justify-start mt-3 w-full h-full">
            {step === 1 && (
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
                  onClick={() => setStep(2)}
                  className=" w-[70%] mt-4 text-blue transition-all duration-300 hover:text-white py-2 border-[2px] border-blue hover:bg-blue rounded-md"
                >
                  Next
                </button>
              </>
            )}

            {step === 2 && (
              <div className=" w-full h-full flex flex-col items-center justify-start ">
                <p className=" w-full text-start px-4">
                  <IoMdArrowRoundBack
                    size={20}
                    className="cursor-pointer"
                    onClick={() => setStep(1)}
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
                      setReason(e.target.value);
                      setErr(false);
                    }}
                    value={reason}
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
                        if (trigger) {
                          if (reason !== "") {
                            return trigger(details.id, details.value, reason);
                          } else {
                            return setErr(true);
                          }
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
        <ModelPopup showDrawer={modalpopup} width="50%" height="70%">
          <div className="flex flex-col gap-4 items-center justify-start mt-3 w-full h-full">
            {step === 1 && (
              <>
                <p className="text-[18px] font-semibold text-center w-[80%]">
                  Scan the QR Code and pay
                </p>
                <div className="w-[50%] h-[50%]">
                  <img src={QRCODE} alt="qrCode" />
                </div>
                <button
                  onClick={() => setStep(2)}
                  className=" w-[70%] mt-6 text-blue transition-all duration-300 hover:text-white py-2 border-[2px] border-blue hover:bg-blue rounded-md"
                >
                  Next
                </button>
              </>
            )}

            {step === 2 && (
              <div className=" w-full h-full flex flex-col items-center justify-start ">
                <p className=" w-full text-start px-4">
                  <IoMdArrowRoundBack
                    size={20}
                    className="cursor-pointer"
                    onClick={() => setStep(1)}
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
                      setReason(e.target.value);
                      setErr(false);
                    }}
                    value={reason}
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
                        if (trigger) {
                          if (reason !== "") {
                            return trigger(details.id, details.value, reason);
                          } else {
                            return setErr(true);
                          }
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
        <ModelPopup showDrawer={modalpopup} width="60%" height="70%">
          <div className="flex flex-col gap-4 items-center justify-start mt-3 w-full h-full">
            {step === 1 && (
              <>
                <p className="text-[18px] font-semibold text-center w-[80%]">
                  Scan the QR Code and pay
                </p>
                <div className="w-[60%] h-[60%]">
                  <img src={QRCODE} alt="qrCode" />
                </div>
                <button
                  onClick={() => setStep(2)}
                  className=" w-[70%] text-blue transition-all duration-300 hover:text-white py-2 border-[2px] border-blue hover:bg-blue rounded-md"
                >
                  Next
                </button>
              </>
            )}

            {step === 2 && (
              <div className=" w-full h-full flex flex-col items-center justify-start ">
                <p className=" w-full text-start px-4">
                  <IoMdArrowRoundBack
                    size={20}
                    className="cursor-pointer"
                    onClick={() => setStep(1)}
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
                      setReason(e.target.value);
                      setErr(false);
                    }}
                    value={reason}
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
                        if (trigger) {
                          if (reason !== "") {
                            return trigger(details.id, details.value, reason);
                          } else {
                            return setErr(true);
                          }
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
        <ModelPopup showDrawer={modalpopup} width="90%" height="60%">
          <div className="flex flex-col gap-4 items-center justify-start mt-3 w-full h-full">
            {step === 1 && (
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
                  onClick={() => setStep(2)}
                  className=" w-[70%] text-blue transition-all duration-300 hover:text-white py-2 border-[2px] border-blue hover:bg-blue rounded-md"
                >
                  Next
                </button>
              </>
            )}

            {step === 2 && (
              <div className=" w-full h-full flex flex-col items-center justify-start ">
                <p className=" w-full text-start px-4">
                  <IoMdArrowRoundBack
                    size={20}
                    className="cursor-pointer"
                    onClick={() => setStep(1)}
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
                      setReason(e.target.value);
                      setErr(false);
                    }}
                    value={reason}
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
                        if (trigger) {
                          if (reason !== "") {
                            return trigger(details.id, details.value, reason);
                          } else {
                            return setErr(true);
                          }
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
        <ModelPopup showDrawer={modalpopup} width="96%" height="60%">
          <div className="flex flex-col gap-4 items-center justify-start mt-3 w-full h-full">
            {step === 1 && (
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
                  onClick={() => setStep(2)}
                  className=" w-[70%] text-blue transition-all duration-300 hover:text-white py-2 border-[2px] border-blue hover:bg-blue rounded-md"
                >
                  Next
                </button>
              </>
            )}

            {step === 2 && (
              <div className=" w-full h-full flex flex-col items-center justify-start ">
                <p className=" w-full text-start px-4">
                  <IoMdArrowRoundBack
                    size={20}
                    className="cursor-pointer"
                    onClick={() => setStep(1)}
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
                      setReason(e.target.value);
                      setErr(false);
                    }}
                    value={reason}
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
                        if (trigger) {
                          if (reason !== "") {
                            return trigger(details.id, details.value, reason);
                          } else {
                            return setErr(true);
                          }
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
  );
};

export default ModelResponsive;
