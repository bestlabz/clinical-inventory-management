import React from "react";
import ModelPopup from "../ModelPopup/Notification";
import { IoClose } from "react-icons/io5";

//Translate
import TranslateJson from "../../../utils/translation/en.json";
import { useDispatch } from "react-redux";
import { setVisible } from "../../../Redux/Slice/Notification";

import NotificationFunction from "../../../hooks/Notification/Notification";
import dayjs from "dayjs";

const LogOutModalResponsive = ({ modalpopup }) => {
  const { notifications, handleClick } = NotificationFunction();
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setVisible());
  };

  return (
    <>
      <div className=" 2xl:block xl:hidden lg:hidden md:hidden sm:hidden xs:hidden mobile:hidden xss:hidden">
        <ModelPopup showDrawer={modalpopup} width="20%">
          <div className="w-full h-full overflow-hidden px-3">
            <div className="static h-[40px] w-[98%] flex items-center space-x-4">
              <IoClose
                onClick={openModal}
                size={20}
                className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
              />{" "}
              <p className=" text-[18px] font-semibold">Notifications</p>
              <div className="flex-1 text-end">
                <button className=" text-[14px] font-semibold  px-4 py-[2px] rounded-md border-[1px] border-blue text-blue">
                  Clear all
                </button>
              </div>
            </div>
            <div className="h-[1px] mt-2 bg-gray-300"></div>

            <div className=" w-full h-[90%] overflow-y-auto py-2 flex flex-col gap-2">
              {notifications.map((item, index) => {
                return (
                  <div
                    onClick={() => handleClick(item?._id)}
                    key={index}
                    className={` ${
                      item?.read ? "bg-transparent" : "bg-blue"
                    } bg-opacity-[.1] py-1 flex gap-4 px-2 cursor-pointer border-b-[2px] rounded-md`}
                  >
                    <div className="w-[40px] h-[40px] rounded-full relative">
                      <div className="w-[40px] h-[40px] border-[3px] mx-auto rounded-full overflow-hidden ">
                        {/* <img
                          src=""
                          className="w-full h-full object-cover"
                        /> */}
                      </div>
                      {!item?.read && (
                        <div className="w-[7px] h-[7px] bg-blue rounded-full absolute top-0 -right-2"></div>
                      )}
                    </div>
                    <div className="w-full  h-full">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">{item?.recipientType}</p>
                        <p className=" text-[12px] text-[#949494]">
                          {dayjs(item?.createdAt).format("DD/M/YY")}{" "}
                          {dayjs(item?.createdAt).format("hh:mm A")}
                        </p>
                      </div>
                      <p className=" text-[14px] text-[#949494]">
                        {item?.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ModelPopup>
      </div>

      <div className=" 2xl:hidden xl:block lg:hidden md:hidden sm:hidden xs:hidden mobile:hidden xss:hidden">
        <ModelPopup showDrawer={modalpopup} width="20%">
        <div className="w-full h-full overflow-hidden px-3">
            <div className="static h-[40px] w-[98%] flex items-center space-x-4">
              <IoClose
                onClick={openModal}
                size={20}
                className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
              />{" "}
              <p className=" text-[18px] font-semibold">Notifications</p>
              <div className="flex-1 text-end">
                <button className=" text-[14px] font-semibold  px-4 py-[2px] rounded-md border-[1px] border-blue text-blue">
                  Clear all
                </button>
              </div>
            </div>
            <div className="h-[1px] mt-2 bg-gray-300"></div>

            <div className=" w-full h-[90%] overflow-y-auto py-2 flex flex-col gap-2">
              {notifications.map((item, index) => {
                return (
                  <div
                    onClick={() => handleClick(item?._id)}
                    key={index}
                    className={` ${
                      item?.read ? "bg-transparent" : "bg-blue"
                    } bg-opacity-[.1] py-1 flex gap-4 px-2 cursor-pointer border-b-[2px] rounded-md`}
                  >
                    <div className="w-[40px] h-[40px] rounded-full relative">
                      <div className="w-[40px] h-[40px] border-[3px] mx-auto rounded-full overflow-hidden ">
                        {/* <img
                          src=""
                          className="w-full h-full object-cover"
                        /> */}
                      </div>
                      {!item?.read && (
                        <div className="w-[7px] h-[7px] bg-blue rounded-full absolute top-0 -right-2"></div>
                      )}
                    </div>
                    <div className="w-full  h-full">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">{item?.recipientType}</p>
                        <p className=" text-[12px] text-[#949494]">
                          {dayjs(item?.createdAt).format("DD/M/YY")}{" "}
                          {dayjs(item?.createdAt).format("hh:mm A")}
                        </p>
                      </div>
                      <p className=" text-[14px] text-[#949494]">
                        {item?.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ModelPopup>
      </div>

      <div className=" 2xl:hidden xl:hidden lg:block md:hidden sm:hidden xs:hidden mobile:hidden xss:hidden">
        <ModelPopup showDrawer={modalpopup} width="30%">
        <div className="w-full h-full overflow-hidden px-3">
            <div className="static h-[40px] w-[98%] flex items-center space-x-4">
              <IoClose
                onClick={openModal}
                size={20}
                className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
              />{" "}
              <p className=" text-[18px] font-semibold">Notifications</p>
              <div className="flex-1 text-end">
                <button className=" text-[14px] font-semibold  px-4 py-[2px] rounded-md border-[1px] border-blue text-blue">
                  Clear all
                </button>
              </div>
            </div>
            <div className="h-[1px] mt-2 bg-gray-300"></div>

            <div className=" w-full h-[90%] overflow-y-auto py-2 flex flex-col gap-2">
              {notifications.map((item, index) => {
                return (
                  <div
                    onClick={() => handleClick(item?._id)}
                    key={index}
                    className={` ${
                      item?.read ? "bg-transparent" : "bg-blue"
                    } bg-opacity-[.1] py-1 flex gap-4 px-2 cursor-pointer border-b-[2px] rounded-md`}
                  >
                    <div className="w-[40px] h-[40px] rounded-full relative">
                      <div className="w-[40px] h-[40px] border-[3px] mx-auto rounded-full overflow-hidden ">
                        {/* <img
                          src=""
                          className="w-full h-full object-cover"
                        /> */}
                      </div>
                      {!item?.read && (
                        <div className="w-[7px] h-[7px] bg-blue rounded-full absolute top-0 -right-2"></div>
                      )}
                    </div>
                    <div className="w-full  h-full">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">{item?.recipientType}</p>
                        <p className=" text-[12px] text-[#949494]">
                          {dayjs(item?.createdAt).format("DD/M/YY")}{" "}
                          {dayjs(item?.createdAt).format("hh:mm A")}
                        </p>
                      </div>
                      <p className=" text-[14px] text-[#949494]">
                        {item?.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ModelPopup>
      </div>

      <div className=" 2xl:hidden xl:hidden lg:hidden md:block sm:block xs:hidden mobile:hidden xss:hidden">
        <ModelPopup showDrawer={modalpopup} width="40%">
        <div className="w-full h-full overflow-hidden px-3">
            <div className="static h-[40px] w-[98%] flex items-center space-x-4">
              <IoClose
                onClick={openModal}
                size={20}
                className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
              />{" "}
              <p className=" text-[18px] font-semibold">Notifications</p>
              <div className="flex-1 text-end">
                <button className=" text-[14px] font-semibold  px-4 py-[2px] rounded-md border-[1px] border-blue text-blue">
                  Clear all
                </button>
              </div>
            </div>
            <div className="h-[1px] mt-2 bg-gray-300"></div>

            <div className=" w-full h-[90%] overflow-y-auto py-2 flex flex-col gap-2">
              {notifications?.map((item, index) => {
                return (
                  <div
                    onClick={() => handleClick(item?._id)}
                    key={index}
                    className={` ${
                      item?.read ? "bg-transparent" : "bg-blue"
                    } bg-opacity-[.1] py-1 flex gap-4 px-2 cursor-pointer border-b-[2px] rounded-md`}
                  >
                    <div className="w-[40px] h-[40px] rounded-full relative">
                      <div className="w-[40px] h-[40px] border-[3px] mx-auto rounded-full overflow-hidden ">
                        {/* <img
                          src=""
                          className="w-full h-full object-cover"
                        /> */}
                      </div>
                      {!item?.read && (
                        <div className="w-[7px] h-[7px] bg-blue rounded-full absolute top-0 -right-2"></div>
                      )}
                    </div>
                    <div className="w-full  h-full">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">{item?.recipientType}</p>
                        <p className=" text-[12px] text-[#949494]">
                          {dayjs(item?.createdAt).format("DD/M/YY")}{" "}
                          {dayjs(item?.createdAt).format("hh:mm A")}
                        </p>
                      </div>
                      <p className=" text-[14px] text-[#949494]">
                        {item?.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ModelPopup>
      </div>

      <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block mobile:hidden xss:hidden">
        <ModelPopup showDrawer={modalpopup} width="65%">
        <div className="w-full h-full overflow-hidden px-3">
            <div className="static h-[40px] w-[98%] flex items-center space-x-4">
              <IoClose
                onClick={openModal}
                size={20}
                className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
              />{" "}
              <p className=" text-[18px] font-semibold">Notifications</p>
              <div className="flex-1 text-end">
                <button className=" text-[14px] font-semibold  px-4 py-[2px] rounded-md border-[1px] border-blue text-blue">
                  Clear all
                </button>
              </div>
            </div>
            <div className="h-[1px] mt-2 bg-gray-300"></div>

            <div className=" w-full h-[90%] overflow-y-auto py-2 flex flex-col gap-2">
              {notifications.map((item, index) => {
                return (
                  <div
                    onClick={() => handleClick(item?._id)}
                    key={index}
                    className={` ${
                      item?.read ? "bg-transparent" : "bg-blue"
                    } bg-opacity-[.1] py-1 flex gap-4 px-2 cursor-pointer border-b-[2px] rounded-md`}
                  >
                    <div className="w-[40px] h-[40px] rounded-full relative">
                      <div className="w-[40px] h-[40px] border-[3px] mx-auto rounded-full overflow-hidden ">
                        {/* <img
                          src=""
                          className="w-full h-full object-cover"
                        /> */}
                      </div>
                      {!item?.read && (
                        <div className="w-[7px] h-[7px] bg-blue rounded-full absolute top-0 -right-2"></div>
                      )}
                    </div>
                    <div className="w-full  h-full">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">{item?.recipientType}</p>
                        <p className=" text-[12px] text-[#949494]">
                          {dayjs(item?.createdAt).format("DD/M/YY")}{" "}
                          {dayjs(item?.createdAt).format("hh:mm A")}
                        </p>
                      </div>
                      <p className=" text-[14px] text-[#949494]">
                        {item?.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ModelPopup>
      </div>

      <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:hidden mobile:block xss:hidden">
        <ModelPopup showDrawer={modalpopup} width="80%">
        <div className="w-full h-full overflow-hidden px-3">
            <div className="static h-[40px] w-[98%] flex items-center space-x-4">
              <IoClose
                onClick={openModal}
                size={20}
                className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
              />{" "}
              <p className=" text-[18px] font-semibold">Notifications</p>
              <div className="flex-1 text-end">
                <button className=" text-[14px] font-semibold  px-4 py-[2px] rounded-md border-[1px] border-blue text-blue">
                  Clear all
                </button>
              </div>
            </div>
            <div className="h-[1px] mt-2 bg-gray-300"></div>

            <div className=" w-full h-[90%] overflow-y-auto py-2 flex flex-col gap-2">
              {notifications.map((item, index) => {
                return (
                  <div
                    onClick={() => handleClick(item?._id)}
                    key={index}
                    className={` ${
                      item?.read ? "bg-transparent" : "bg-blue"
                    } bg-opacity-[.1] py-1 flex gap-4 px-2 cursor-pointer border-b-[2px] rounded-md`}
                  >
                    <div className="w-[40px] h-[40px] rounded-full relative">
                      <div className="w-[40px] h-[40px] border-[3px] mx-auto rounded-full overflow-hidden ">
                        {/* <img
                          src=""
                          className="w-full h-full object-cover"
                        /> */}
                      </div>
                      {!item?.read && (
                        <div className="w-[7px] h-[7px] bg-blue rounded-full absolute top-0 -right-2"></div>
                      )}
                    </div>
                    <div className="w-full  h-full">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">{item?.recipientType}</p>
                        <p className=" text-[12px] text-[#949494]">
                          {dayjs(item?.createdAt).format("DD/M/YY")}{" "}
                          {dayjs(item?.createdAt).format("hh:mm A")}
                        </p>
                      </div>
                      <p className=" text-[14px] text-[#949494]">
                        {item?.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ModelPopup>
      </div>

      <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:hidden mobile:hidden xss:block">
        <ModelPopup showDrawer={modalpopup} width="85%">
        <div className="w-full h-full overflow-hidden px-3">
            <div className="static h-[40px] w-[98%] flex items-center space-x-4">
              <IoClose
                onClick={openModal}
                size={20}
                className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
              />{" "}
              <p className=" text-[18px] font-semibold">Notifications</p>
              <div className="flex-1 text-end">
                <button className=" text-[14px] font-semibold  px-4 py-[2px] rounded-md border-[1px] border-blue text-blue">
                  Clear all
                </button>
              </div>
            </div>
            <div className="h-[1px] mt-2 bg-gray-300"></div>

            <div className=" w-full h-[90%] overflow-y-auto py-2 flex flex-col gap-2">
              {notifications.map((item, index) => {
                return (
                  <div
                    onClick={() => handleClick(item?._id)}
                    key={index}
                    className={` ${
                      item?.read ? "bg-transparent" : "bg-blue"
                    } bg-opacity-[.1] py-1 flex gap-4 px-2 cursor-pointer border-b-[2px] rounded-md`}
                  >
                    <div className="w-[40px] h-[40px] rounded-full relative">
                      <div className="w-[40px] h-[40px] border-[3px] mx-auto rounded-full overflow-hidden ">
                        {/* <img
                          src=""
                          className="w-full h-full object-cover"
                        /> */}
                      </div>
                      {!item?.read && (
                        <div className="w-[7px] h-[7px] bg-blue rounded-full absolute top-0 -right-2"></div>
                      )}
                    </div>
                    <div className="w-full  h-full">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">{item?.recipientType}</p>
                        <p className=" text-[12px] text-[#949494]">
                          {dayjs(item?.createdAt).format("DD/M/YY")}{" "}
                          {dayjs(item?.createdAt).format("hh:mm A")}
                        </p>
                      </div>
                      <p className=" text-[14px] text-[#949494]">
                        {item?.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ModelPopup>
      </div>
    </>
  );
};

export default LogOutModalResponsive;
