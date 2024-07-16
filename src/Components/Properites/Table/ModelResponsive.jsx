import React, { useEffect, useState } from "react";
import ModelPopup from "../ModelPopup/ModelPopup";
import { IoClose } from "react-icons/io5";

//Translate
import TranslateJson from "../../../utils/translation/en.json";
import { ClipLoader } from "react-spinners";

const ModelResponsive = ({
  popUpModel,
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

  useEffect(() => {
    if (popUpModel === "edit") {
      return setReason(details.value);
    }
  }, [popUpModel, details]);

  useEffect(() => {
    if (clear && setClear) {
      setReason("");
      openModal(false);
      setClear(false);
      return;
    }
  }, [clear]);

  return (
    <>
      {(popUpModel === "DosageForm" || popUpModel === "DosageStrength") && (
        <>
          <div className=" 2xl:block xl:block lg:hidden md:hidden sm:hidden xs:hidden mobile:hidden xss:hidden">
            <ModelPopup showDrawer={modalpopup} width="30%" height="30%">
              <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
                <div className="absolute top-2 right-3">
                  <IoClose
                    onClick={() => openModal(false)}
                    size={20}
                    className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
                  />{" "}
                </div>
                <p className="text-[22px] font-semibold text-center w-[80%]">
                  Are you sure you want to Delete ?
                </p>
                <div className="flex items-center w-[80%] justify-center gap-4">
                  <button
                    className="logout-button bg-red-500 text-white text-[18px] hover:bg-transparent hover:text-red-500 transition-all duration-300 hover:border-red-500"
                    onClick={() => openModal(false)}
                  >
                    {TranslateJson.toggel.buttons.cancel}
                  </button>
                  {loader ? (
                    <button className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300">
                      <ClipLoader size={15} />
                    </button>
                  ) : (
                    <button
                      onClick={() => trigger(details.id, details.value, reason)}
                      className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300"
                    >
                      {TranslateJson.toggel.buttons.Submit}
                    </button>
                  )}
                </div>
              </div>
            </ModelPopup>
          </div>

          <div className=" 2xl:hidden xl:hidden lg:block md:hidden sm:hidden xs:hidden mobile:hidden xss:hidden">
            <ModelPopup showDrawer={modalpopup} width="50%" height="30%">
              <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
                <div className="absolute top-2 right-3">
                  <IoClose
                    onClick={() => openModal(false)}
                    size={20}
                    className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
                  />{" "}
                </div>
                <p className="text-[22px] font-semibold text-center w-[80%]">
                  Are you sure you want to Delete ?
                </p>

                <div className="flex items-center justify-center w-[80%] gap-4">
                  <button
                    className="logout-button bg-red-500 text-white text-[18px] hover:bg-transparent hover:text-red-500 transition-all duration-300 hover:border-red-500"
                    onClick={() => openModal(false)}
                  >
                    {TranslateJson.toggel.buttons.cancel}
                  </button>
                  {loader ? (
                    <button className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300">
                      <ClipLoader size={15} />
                    </button>
                  ) : (
                    <button
                      onClick={() => trigger(details.id, details.value, reason)}
                      className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300"
                    >
                      {TranslateJson.toggel.buttons.Submit}
                    </button>
                  )}
                </div>
              </div>
            </ModelPopup>
          </div>

          <div className=" 2xl:hidden xl:hidden lg:hidden md:block sm:block xs:hidden mobile:hidden xss:hidden">
            <ModelPopup showDrawer={modalpopup} width="60%" height="30%">
              <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
                <div className="absolute top-2 right-3">
                  <IoClose
                    onClick={() => openModal(false)}
                    size={20}
                    className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
                  />{" "}
                </div>
                <p className="text-[22px] font-semibold text-center w-[80%]">
                  Are you sure you want to Delete ?
                </p>

                <div className="flex items-center justify-center w-[80%] gap-4">
                  <button
                    className="logout-button bg-red-500 text-white text-[18px] hover:bg-transparent hover:text-red-500 transition-all duration-300 hover:border-red-500"
                    onClick={() => openModal(false)}
                  >
                    {TranslateJson.toggel.buttons.cancel}
                  </button>
                  {loader ? (
                    <button className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300">
                      <ClipLoader size={15} />
                    </button>
                  ) : (
                    <button
                      onClick={() => trigger(details.id, details.value, reason)}
                      className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300"
                    >
                      {TranslateJson.toggel.buttons.Submit}
                    </button>
                  )}
                </div>
              </div>
            </ModelPopup>
          </div>

          <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block mobile:block xss:hidden">
            <ModelPopup showDrawer={modalpopup} width="90%" height="30%">
              <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
                <div className="absolute top-2 right-3">
                  <IoClose
                    onClick={() => openModal(false)}
                    size={20}
                    className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
                  />{" "}
                </div>
                <p className="text-[18px] font-semibold text-center w-[80%]">
                  Are you sure you want to Delete ?
                </p>

                <div className="flex items-center w-[80%] justify-center gap-4">
                  <button
                    className="logout-button bg-red-500 text-white text-[18px] hover:bg-transparent hover:text-red-500 transition-all duration-300 hover:border-red-500"
                    onClick={() => openModal(false)}
                  >
                    {TranslateJson.toggel.buttons.cancel}
                  </button>
                  {loader ? (
                    <button className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300">
                      <ClipLoader size={15} />
                    </button>
                  ) : (
                    <button
                      onClick={() => trigger(details.id, details.value, reason)}
                      className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300"
                    >
                      {TranslateJson.toggel.buttons.Submit}
                    </button>
                  )}
                </div>
              </div>
            </ModelPopup>
          </div>

          <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:hidden mobile:hidden xss:block">
            <ModelPopup showDrawer={modalpopup} width="96%" height="30%">
              <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
                <div className="absolute top-2 right-3">
                  <IoClose
                    onClick={() => openModal(false)}
                    size={20}
                    className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
                  />{" "}
                </div>
                <p className="text-[18px] font-semibold text-center w-[90%]">
                  Are you sure you want to Delete ?
                </p>

                <div className="flex items-center gap-4">
                  <button
                    className="logout-button bg-red-500 text-white text-[18px] hover:bg-transparent hover:text-red-500 transition-all duration-300 hover:border-red-500"
                    onClick={() => openModal(false)}
                  >
                    {TranslateJson.toggel.buttons.cancel}
                  </button>
                  {loader ? (
                    <button className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300">
                      <ClipLoader size={15} />
                    </button>
                  ) : (
                    <button
                      onClick={() => trigger(details.id, details.value, reason)}
                      className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300"
                    >
                      {TranslateJson.toggel.buttons.Submit}
                    </button>
                  )}
                </div>
              </div>
            </ModelPopup>
          </div>
        </>
      )}
      {popUpModel === "edit" && (
        <>
          <div className=" 2xl:block xl:block lg:hidden md:hidden sm:hidden xs:hidden mobile:hidden xss:hidden">
            <ModelPopup showDrawer={modalpopup} width="30%" height="30%">
              <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
                <div className="absolute top-2 right-3">
                  <IoClose
                    onClick={() => openModal(false)}
                    size={20}
                    className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
                  />{" "}
                </div>
                <p className="text-[22px] font-semibold text-center w-[80%]">
                  Are you sure you want to Edit ?
                </p>
                <div className="w-[80%] flex flex-col gap-3">
                  <input
                    onChange={(e) => {
                      if (/^[A-Za-z]*$/.test(e.target.value)) {
                        setReason(e.target.value);
                        setErr(false);
                        return;
                      }
                    }}
                    value={reason}
                    placeholder="Enter name value"
                    className=" w-full rounded-lg border-[1px] border-gray-400 p-2 resize-none outline-none"
                  />
                  {err && <p className="text-red-500">Require</p>}
                </div>

                <div className="flex items-center w-[80%] justify-end gap-4">
                  <button
                    className="logout-button bg-red-500 text-white text-[18px] hover:bg-transparent hover:text-red-500 transition-all duration-300 hover:border-red-500"
                    onClick={() => openModal(false)}
                  >
                    {TranslateJson.toggel.buttons.cancel}
                  </button>
                  {loader ? (
                    <button className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300">
                      <ClipLoader size={15} />
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
                      className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300"
                    >
                      {TranslateJson.toggel.buttons.Submit}
                    </button>
                  )}
                </div>
              </div>
            </ModelPopup>
          </div>

          <div className=" 2xl:hidden xl:hidden lg:block md:hidden sm:hidden xs:hidden mobile:hidden xss:hidden">
            <ModelPopup showDrawer={modalpopup} width="50%" height="35%">
              <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
                <div className="absolute top-2 right-3">
                  <IoClose
                    onClick={() => openModal(false)}
                    size={20}
                    className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
                  />{" "}
                </div>
                <p className="text-[18px] font-semibold text-center w-[80%]">
                  Are you sure you want to Edit ?
                </p>
                <div className="w-[80%] flex flex-col gap-3">
                  <input
                    onChange={(e) => {
                      if (/^[A-Za-z]*$/.test(e.target.value)) {
                        setReason(e.target.value);
                        setErr(false);
                        return;
                      }
                    }}
                    value={reason}
                    placeholder="Enter name value"
                    className=" w-full rounded-lg border-[1px] border-gray-400 p-2 resize-none outline-none"
                  />
                  {err && <p className="text-red-500">Require</p>}
                </div>

                <div className="flex items-center w-[80%] justify-end gap-4">
                  <button
                    className="logout-button bg-red-500 text-white text-[16px] hover:bg-transparent hover:text-red-500 transition-all duration-300 hover:border-red-500"
                    onClick={() => openModal(false)}
                  >
                    {TranslateJson.toggel.buttons.cancel}
                  </button>
                  {loader ? (
                    <button className="logout-button text-[16px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300">
                      <ClipLoader size={15} />
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
                      className="logout-button text-[16px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300"
                    >
                      {TranslateJson.toggel.buttons.Submit}
                    </button>
                  )}
                </div>
              </div>
            </ModelPopup>
          </div>

          <div className=" 2xl:hidden xl:hidden lg:hidden md:block sm:block xs:hidden mobile:hidden xss:hidden">
            <ModelPopup showDrawer={modalpopup} width="60%" height="35%">
              <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
                <div className="absolute top-2 right-3">
                  <IoClose
                    onClick={() => openModal(false)}
                    size={20}
                    className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
                  />{" "}
                </div>
                <p className="text-[18px] font-semibold text-center w-[80%]">
                  Are you sure you want to Edit ?
                </p>
                <div className="w-[80%] flex flex-col gap-3">
                  <input
                    onChange={(e) => {
                      if (/^[A-Za-z]*$/.test(e.target.value)) {
                        setReason(e.target.value);
                        setErr(false);
                        return;
                      }
                    }}
                    value={reason}
                    placeholder="Enter name value"
                    className=" w-full rounded-lg border-[1px] border-gray-400 p-2 resize-none outline-none"
                  />
                  {err && <p className="text-red-500">Require</p>}
                </div>

                <div className="flex items-center w-[80%] justify-end gap-4">
                  <button
                    className="logout-button bg-red-500 text-white text-[16px] hover:bg-transparent hover:text-red-500 transition-all duration-300 hover:border-red-500"
                    onClick={() => openModal(false)}
                  >
                    {TranslateJson.toggel.buttons.cancel}
                  </button>
                  {loader ? (
                    <button className="logout-button text-[16px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300">
                      <ClipLoader size={15} />
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
                      className="logout-button text-[16px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300"
                    >
                      {TranslateJson.toggel.buttons.Submit}
                    </button>
                  )}
                </div>
              </div>
            </ModelPopup>
          </div>

          <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block mobile:block xss:hidden">
            <ModelPopup showDrawer={modalpopup} width="90%" height="35%">
              <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
                <div className="absolute top-2 right-3">
                  <IoClose
                    onClick={() => openModal(false)}
                    size={20}
                    className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
                  />{" "}
                </div>
                <p className="text-[18px] font-semibold text-center w-[80%]">
                  Are you sure you want to Edit ?
                </p>
                <div className="w-[80%] flex flex-col gap-3">
                  <input
                    onChange={(e) => {
                      if (/^[A-Za-z]*$/.test(e.target.value)) {
                        setReason(e.target.value);
                        setErr(false);
                        return;
                      }
                    }}
                    value={reason}
                    placeholder="Enter name value"
                    className=" w-full rounded-lg border-[1px] border-gray-400 p-2 resize-none outline-none"
                  />
                  {err && <p className="text-red-500">Require</p>}
                </div>

                <div className="flex items-center w-[80%] justify-end gap-4">
                  <button
                    className="logout-button bg-red-500 text-white text-[14px] hover:bg-transparent hover:text-red-500 transition-all duration-300 hover:border-red-500"
                    onClick={() => openModal(false)}
                  >
                    {TranslateJson.toggel.buttons.cancel}
                  </button>
                  {loader ? (
                    <button className="logout-button text-[14px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300">
                      <ClipLoader size={15} />
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
                      className="logout-button text-[14px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300"
                    >
                      {TranslateJson.toggel.buttons.Submit}
                    </button>
                  )}
                </div>
              </div>
            </ModelPopup>
          </div>

          <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:hidden mobile:hidden xss:block">
            <ModelPopup showDrawer={modalpopup} width="96%" height="35%">
              <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
                <div className="absolute top-2 right-3">
                  <IoClose
                    onClick={() => openModal(false)}
                    size={20}
                    className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
                  />{" "}
                </div>
                <p className="text-[16px] font-semibold text-center w-[80%]">
                  Are you sure you want to Edit ?
                </p>
                <div className="w-[80%] flex flex-col gap-3">
                  <input
                    onChange={(e) => {
                      if (/^[A-Za-z]*$/.test(e.target.value)) {
                        setReason(e.target.value);
                        setErr(false);
                        return;
                      }
                    }}
                    value={reason}
                    placeholder="Enter name value"
                    className=" w-full rounded-lg border-[1px] border-gray-400 px-2 p-1 resize-none outline-none"
                  />
                  {err && <p className="text-red-500">Require</p>}
                </div>

                <div className="flex items-center w-[80%] justify-end gap-4">
                  <button
                    className="logout-button bg-red-500 text-white text-[14px] hover:bg-transparent hover:text-red-500 transition-all duration-300 hover:border-red-500"
                    onClick={() => openModal(false)}
                  >
                    {TranslateJson.toggel.buttons.cancel}
                  </button>
                  {loader ? (
                    <button className="logout-button text-[14px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300">
                      <ClipLoader size={15} />
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
                      className="logout-button text-[14px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300"
                    >
                      {TranslateJson.toggel.buttons.Submit}
                    </button>
                  )}
                </div>
              </div>
            </ModelPopup>
          </div>
        </>
      )}
      {popUpModel === "" && (
        <>
          <div className=" 2xl:block xl:block lg:hidden md:hidden sm:hidden xs:hidden mobile:hidden xss:hidden">
            <ModelPopup showDrawer={modalpopup} width="30%" height="50%">
              <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
                <div className="absolute top-2 right-3">
                  <IoClose
                    onClick={() => openModal(false)}
                    size={20}
                    className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
                  />{" "}
                </div>
                <p className="text-[22px] font-semibold text-center w-[80%]">
                  {details.value
                    ? TranslateJson.toggel.block
                    : TranslateJson.toggel.unBlock}
                </p>
                <div className="w-[80%] flex flex-col gap-3">
                  <p className=" text-start w-[80%] font-medium text-[18px]">
                    {TranslateJson.toggel.label}
                  </p>
                  <textarea
                    onChange={(e) => {
                      if (/^[A-Za-z]*$/.test(e.target.value)) {
                        setReason(e.target.value);
                        setErr(false);
                        return;
                      }
                    }}
                    value={reason}
                    placeholder="Give the reason"
                    rows={4}
                    className=" w-full rounded-lg border-[1px] border-gray-400 p-2 resize-none outline-none"
                  />
                  {err && <p className="text-red-500">Require</p>}
                </div>

                <div className="flex items-center w-[80%] justify-end gap-4">
                  <button
                    className="logout-button bg-red-500 text-white text-[18px] hover:bg-transparent hover:text-red-500 transition-all duration-300 hover:border-red-500"
                    onClick={() => openModal(false)}
                  >
                    {TranslateJson.toggel.buttons.cancel}
                  </button>
                  {loader ? (
                    <button className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300">
                      <ClipLoader size={15} />
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
                      className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300"
                    >
                      {TranslateJson.toggel.buttons.Submit}
                    </button>
                  )}
                </div>
              </div>
            </ModelPopup>
          </div>

          <div className=" 2xl:hidden xl:hidden lg:block md:hidden sm:hidden xs:hidden mobile:hidden xss:hidden">
            <ModelPopup showDrawer={modalpopup} width="50%" height="45%">
              <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
                <div className="absolute top-2 right-3">
                  <IoClose
                    onClick={() => openModal(false)}
                    size={20}
                    className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
                  />{" "}
                </div>
                <p className="text-[22px] font-semibold text-center w-[80%]">
                  {details.value
                    ? TranslateJson.toggel.block
                    : TranslateJson.toggel.unBlock}
                </p>
                <div className="w-[80%] flex flex-col gap-3">
                  <p className=" text-start w-[80%] font-medium text-[18px]">
                    {TranslateJson.toggel.label}
                  </p>
                  <textarea
                    onChange={(e) => {
                      if (/^[A-Za-z]*$/.test(e.target.value)) {
                        setReason(e.target.value);
                        setErr(false);
                        return;
                      }
                    }}
                    value={reason}
                    placeholder="Give the reason"
                    rows={4}
                    className=" w-full rounded-lg border-[1px] border-gray-400 p-2 resize-none outline-none"
                  />
                  {err && <p className="text-red-500">Require</p>}
                </div>

                <div className="flex items-center justify-end w-[80%] gap-4">
                  <button
                    className="logout-button bg-red-500 text-white text-[18px] hover:bg-transparent hover:text-red-500 transition-all duration-300 hover:border-red-500"
                    onClick={() => openModal(false)}
                  >
                    {TranslateJson.toggel.buttons.cancel}
                  </button>
                  {loader ? (
                    <button className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300">
                      <ClipLoader size={15} />
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
                      className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300"
                    >
                      {TranslateJson.toggel.buttons.Submit}
                    </button>
                  )}
                </div>
              </div>
            </ModelPopup>
          </div>

          <div className=" 2xl:hidden xl:hidden lg:hidden md:block sm:block xs:hidden mobile:hidden xss:hidden">
            <ModelPopup showDrawer={modalpopup} width="60%" height="60%">
              <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
                <div className="absolute top-2 right-3">
                  <IoClose
                    onClick={() => openModal(false)}
                    size={20}
                    className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
                  />{" "}
                </div>
                <p className="text-[22px] font-semibold text-center w-[80%]">
                  {details.value
                    ? TranslateJson.toggel.block
                    : TranslateJson.toggel.unBlock}
                </p>
                <div className="w-[80%] flex flex-col gap-3">
                  <p className=" text-start w-[80%] font-medium text-[18px]">
                    {TranslateJson.toggel.label}
                  </p>
                  <textarea
                    onChange={(e) => {
                      if (/^[A-Za-z]*$/.test(e.target.value)) {
                        setReason(e.target.value);
                        setErr(false);
                        return;
                      }
                    }}
                    value={reason}
                    placeholder="Give the reason"
                    rows={4}
                    className=" w-full rounded-lg border-[1px] border-gray-400 p-2 resize-none outline-none"
                  />
                  {err && <p className="text-red-500">Require</p>}
                </div>

                <div className="flex items-center justify-end w-[80%] gap-4">
                  <button
                    className="logout-button bg-red-500 text-white text-[18px] hover:bg-transparent hover:text-red-500 transition-all duration-300 hover:border-red-500"
                    onClick={() => openModal(false)}
                  >
                    {TranslateJson.toggel.buttons.cancel}
                  </button>
                  {loader ? (
                    <button className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300">
                      <ClipLoader size={15} />
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
                      className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300"
                    >
                      {TranslateJson.toggel.buttons.Submit}
                    </button>
                  )}
                </div>
              </div>
            </ModelPopup>
          </div>

          <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block mobile:block xss:hidden">
            <ModelPopup showDrawer={modalpopup} width="90%" height="60%">
              <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
                <div className="absolute top-2 right-3">
                  <IoClose
                    onClick={() => openModal(false)}
                    size={20}
                    className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
                  />{" "}
                </div>
                <p className="text-[18px] font-semibold text-center w-[80%]">
                  {details.value
                    ? TranslateJson.toggel.block
                    : TranslateJson.toggel.unBlock}
                </p>
                <div className="w-[80%] flex flex-col gap-3">
                  <p className=" text-start w-[80%] font-medium text-[18px]">
                    {TranslateJson.toggel.label}
                  </p>
                  <textarea
                    onChange={(e) => {
                      if (/^[A-Za-z]*$/.test(e.target.value)) {
                        setReason(e.target.value);
                        setErr(false);
                        return;
                      }
                    }}
                    value={reason}
                    placeholder="Give the reason"
                    rows={4}
                    className=" w-full rounded-lg border-[1px] border-gray-400 p-2 resize-none outline-none"
                  />
                  {err && <p className="text-red-500">Require</p>}
                </div>

                <div className="flex items-center w-[80%] justify-end gap-4">
                  <button
                    className="logout-button bg-red-500 text-white text-[18px] hover:bg-transparent hover:text-red-500 transition-all duration-300 hover:border-red-500"
                    onClick={() => openModal(false)}
                  >
                    {TranslateJson.toggel.buttons.cancel}
                  </button>
                  {loader ? (
                    <button className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300">
                      <ClipLoader size={15} />
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
                      className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300"
                    >
                      {TranslateJson.toggel.buttons.Submit}
                    </button>
                  )}
                </div>
              </div>
            </ModelPopup>
          </div>

          <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:hidden mobile:hidden xss:block">
            <ModelPopup showDrawer={modalpopup} width="96%" height="65%">
              <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
                <div className="absolute top-2 right-3">
                  <IoClose
                    onClick={() => openModal(false)}
                    size={20}
                    className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
                  />{" "}
                </div>
                <p className="text-[18px] font-semibold text-center w-[90%]">
                  {details.value
                    ? TranslateJson.toggel.block
                    : TranslateJson.toggel.unBlock}
                </p>
                <div className="w-[90%] flex flex-col gap-3">
                  <p className=" text-start w-[80%] font-medium text-[18px]">
                    {TranslateJson.toggel.label}
                  </p>
                  <textarea
                    onChange={(e) => {
                      if (/^[A-Za-z]*$/.test(e.target.value)) {
                        setReason(e.target.value);
                        setErr(false);

                        return;
                      }
                    }}
                    value={reason}
                    placeholder="Give the reason"
                    rows={4}
                    className=" w-full rounded-lg border-[1px] border-gray-400 p-2 resize-none outline-none"
                  />
                  {err && <p className="text-red-500">Require</p>}
                </div>

                <div className="flex items-center gap-4">
                  <button
                    className="logout-button bg-red-500 text-white text-[18px] hover:bg-transparent hover:text-red-500 transition-all duration-300 hover:border-red-500"
                    onClick={() => openModal(false)}
                  >
                    {TranslateJson.toggel.buttons.cancel}
                  </button>
                  {loader ? (
                    <button className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300">
                      <ClipLoader size={15} />
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
                      className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300"
                    >
                      {TranslateJson.toggel.buttons.Submit}
                    </button>
                  )}
                </div>
              </div>
            </ModelPopup>
          </div>
        </>
      )}
    </>
  );
};

export default ModelResponsive;
