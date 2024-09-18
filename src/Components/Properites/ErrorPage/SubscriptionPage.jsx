import React, { useEffect, useState } from "react";

import ApiRequest from "../../../services/httpService";
import { AddSubscriptionCard } from "../../../Redux/Slice/Subscription";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import ModelResponsive from "./ModelResponse";
import ModelPopup from "../ModelPopup/ModelPopup";

import toast from "react-hot-toast";
import { IoClose } from "react-icons/io5";
import dayjs from "dayjs";

const SubscriptionPage = ({ close = false }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const API = async () => {
      try {
        const { success, durations } = await ApiRequest.get(
          "/subscription_durations"
        );

        if (success) {
          const filter = durations.filter(
            (itm) => itm?.title?.title !== "Free Trail"
          );
          const datas = filter.map((items) => {
            return {
              cardID: items?._id,
              title: items?.title?.title,
              titleID: items?.title?._id,
              price: items?.pricePerMonth,
              discount: items?.discount,
              duration: items?.duration,
              durationInNo: items?.durationInNo,
              feature: items?.feature,
            };
          });

          dispatch(AddSubscriptionCard(datas));
          return;
        }
      } catch (error) {
        console.log("e", error);
      }
    };

    API();
  }, []);
  const [model, setModel] = useState(false);

  const { subscriptionCard } = useSelector((state) => state.subscription);
  const { userDetails } = useSelector((state) => state.userinfo);
  const [detailsAction, setDetailsAction] = useState({
    id: "",
    value: "",
  });
  const [clear, setClear] = useState(false);
  const [loader, setLoader] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [balanceDuePopup, setBalanceDuePopup] = useState(false);

  const handleBalanceModel = () => {
    setBalanceDuePopup(!balanceDuePopup);
  };

  const handleClick = async (id, value, reason) => {
    try {
      setLoader(true);
      const { success, message } = await ApiRequest.post(
        `/updateSubscription/${userDetails?._id}`,
        {
          subscription_id: id,
          transaction_id: reason,
          amount:
            userDetails?.receptionistsCount !== 0 ||
            userDetails?.doctorsCount !== 0
              ? Number(selectedItem?.price) *
                (Number(userDetails?.receptionistsCount) +
                  Number(userDetails?.doctorsCount))
              : selectedItem?.price,
          subscription_startdate: dayjs().toISOString(),
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
      <div
        // style={{
        //   boxShadow: "rgba(100, 100, 111, 0.3) 0px 7px 29px 0px",
        // }}
        className="w-[99%] mx-auto h-[99%] overflow-hidden  rounded-3xl  p-4"
      >
        <div className=" flex items-start justify-between flex-wrap">
          <div>
            <h1 className=" text-[24px] font-semibold p-2 pb-0">
              Choose your plan
            </h1>
            <h1 className="flex items-center gap-3 p-2 font-semibold">
              <MdOutlineRocketLaunch size={20} className="text-green_light" /> 2
              month Free trail
            </h1>
          </div>
        </div>

        <div className="w-full h-[90%] pb-10 overflow-auto p-2">
          <div className="w-full place-content-start  grid gap-8 2xl:p-4 xl:p-4 lg:p-4 md:p-4 sm:p-4 xs:p-1 mobile:p-1 xss:p-0  2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 mobile:grid-cols-1 xss:grid-cols-1 mt-3">
            {subscriptionCard?.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    boxShadow: "rgba(100, 100, 111, 0.4) 0px 7px 29px 0px",
                  }}
                  className="rounded-md px-4 w-full h-full pt-3 pb-6 relative overflow-hidden"
                >
                  <div className="flex items-center pt-4 justify-start mx-auto w-[80%]">
                    <p
                      className={`${
                        index === 0
                          ? "bg-purple-500"
                          : index === 1
                          ? "bg-green_light"
                          : "bg-blue"
                      } w-[22px] h-[22px] rounded-full flex items-center justify-center bg-opacity-[.4]`}
                    >
                      <p
                        className={`${
                          index === 0
                            ? "bg-purple-800"
                            : index === 1
                            ? "bg-green_light"
                            : "bg-blue"
                        } w-[15px] h-[15px] rounded-full`}
                      ></p>
                    </p>
                    <p
                      className={`text-[22px] font-semibold px-3 ${
                        index === 0
                          ? "text-purple-800"
                          : index === 1
                          ? "text-green_light"
                          : "text-blue"
                      }`}
                    >
                      {item?.title} Plan
                    </p>
                  </div>
                  <div className=" flex items-center justify-center w-[80%] py-3">
                    <p className="text-[34px] font-bold p-4 pr-0">
                      ₹{item?.price}
                    </p>
                    <p className="p-2 text-[16px] text-[#9d9d9d] pt-3">
                      / {item?.duration}
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 pb-3">
                    {item?.feature?.map((feature, index) => (
                      <p
                        key={index}
                        className=" w-[80%] flex items-center gap-3 text-[16px] font-medium"
                      >
                        <FaPlus size={20} className="text-yellow-400" />{" "}
                        {feature || ""}
                      </p>
                    ))}
                  </div>
                  <div
                    onClick={() => {
                      setSelectedItem(item);
                      handleBalanceModel();
                      setDetailsAction({
                        id: item?.cardID,
                        value: item?.title,
                      });
                    }}
                    className=" w-full  mt-4  text-center"
                  >
                    <button className=" w-[80%] py-3 rounded-2xl text-green_light hover:bg-green_light hover:text-white text-center border-[3px] border-green_light transition-all duration-300">
                      Get Plan
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <ModelPopup showDrawer={balanceDuePopup} height="90%" width="90%">
        <div className=" w-full h-full overflow-hidden ">
          <div className="relative">
            <button
              onClick={handleBalanceModel}
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
              <h1 className=" col-span-2 text-[16px] font-normal">
                {selectedItem?.title}
              </h1>
              <h1 className=" col-span-1 text-[16px] font-normal text-end">
                {selectedItem?.durationInNo} {selectedItem?.duration}
              </h1>
              <h1 className=" col-span-1 text-[16px] font-bold text-end">
                ₹ {selectedItem?.price}
              </h1>
            </div>
            <div className="w-full h-[2px] bg-light_gray my-3"></div>

            {userDetails?.doctorsCount !== 0 && (
              <>
                <div className="grid grid-cols-4 mt-6 overflow-auto">
                  <h1 className=" col-span-2 text-[16px] font-bold">Doctors</h1>
                  <h1 className=" col-span-1 text-[16px] font-bold text-end">
                    Count
                  </h1>
                  <h1 className=" col-span-1 text-[16px] font-bold text-end">
                    Balance Due
                  </h1>
                </div>

                <div className="grid grid-cols-4 mt-3">
                  <h1 className=" col-span-2 text-[16px] font-normal">
                    Doctors x
                  </h1>
                  <h1 className=" col-span-1 text-[16px] font-normal text-end">
                    {userDetails?.doctorsCount}
                  </h1>
                  <h1 className=" col-span-1 text-[16px] font-bold text-end text-red-500">
                    ₹
                    {Number(selectedItem?.price) *
                      Number(userDetails?.doctorsCount)}
                  </h1>
                </div>
                <div className="w-full h-[2px] bg-light_gray my-3"></div>
              </>
            )}

            {userDetails?.receptionistsCount !== 0 && (
              <>
                <div className="grid grid-cols-4 mt-6 overflow-auto">
                  <h1 className=" col-span-2 text-[16px] font-bold">
                    Receptionist
                  </h1>
                  <h1 className=" col-span-1 text-[16px] font-bold text-end">
                    Count
                  </h1>

                  <h1 className=" col-span-1 text-[16px] font-bold text-end">
                    Balance Due
                  </h1>
                </div>

                <div className="grid grid-cols-4 mt-3">
                  <h1 className=" col-span-2 text-[16px] font-normal">
                    Receptionist x
                  </h1>
                  <h1 className=" col-span-1 text-[16px] font-normal text-end">
                    {userDetails?.receptionistsCount}
                  </h1>

                  <h1 className=" col-span-1 text-[16px] font-bold text-end text-red-500">
                    ₹
                    {Number(selectedItem?.price) *
                      Number(userDetails?.receptionistsCount)}
                  </h1>
                </div>
                <div className="w-full h-[2px] bg-light_gray my-3"></div>
              </>
            )}

            <div className="grid grid-cols-5 mt-6">
              <h1 className=" col-span-2 text-[16px] font-bold"></h1>
              <h1 className=" col-span-1 text-[16px] font-bold text-end"></h1>
              <h1 className=" col-span-1 text-[16px] font-bold text-end">
                Balance Due{" "}
              </h1>
              {userDetails?.receptionistsCount !== 0 ||
              userDetails?.doctorsCount !== 0 ? (
                <h1 className=" col-span-1 text-[16px] font-bold text-end text-red-500">
                  ₹
                  {Number(selectedItem?.price) *
                    (Number(userDetails?.receptionistsCount) +
                      Number(userDetails?.doctorsCount))}
                </h1>
              ) : (
                <h1 className=" col-span-1 text-[16px] font-bold text-end text-red-500">
                  ₹{selectedItem?.price}
                </h1>
              )}
            </div>

            <div className="grid grid-cols-5 mt-6 overflow-auto">
              <h1 className=" col-span-2 text-[16px] font-bold"></h1>
              <h1 className=" col-span-1 text-[16px] font-bold text-end"></h1>
              <h1 className=" col-span-1 text-[16px] font-bold text-end">
                Total Amount
              </h1>
              <h1 className=" col-span-1 text-[16px] font-bold text-end">
                {userDetails?.receptionistsCount !== 0 ||
                userDetails?.doctorsCount !== 0 ? (
                  <h1 className=" col-span-1 text-[16px] font-bold text-end ">
                    ₹
                    {Number(selectedItem?.price) *
                      (Number(userDetails?.receptionistsCount) +
                        Number(userDetails?.doctorsCount))}
                  </h1>
                ) : (
                  <h1 className=" col-span-1 text-[16px] font-bold text-end">
                    ₹{selectedItem?.price}
                  </h1>
                )}
              </h1>
            </div>
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

      <ModelResponsive
        modalpopup={model}
        openModal={setModel}
        trigger={handleClick}
        details={detailsAction}
        clear={clear}
        setClear={setClear}
        loader={loader}
        close={close}
      />
    </div>
  );
};

export default SubscriptionPage;
